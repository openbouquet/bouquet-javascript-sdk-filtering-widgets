(function (root, factory) {
    root.squid_api.view.DateRangeSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_range_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        facetsAttribute : "facets",
        model: null,
        monthsOnlyDisplay : false,
        ranges: [
            {
                name : "All",
                lowerExpression : "=$'MIN'",
                upperExpression : "=$'MAX'"
            },
            {
                name : "First Month",
                lowerExpression : "=$'MIN'",
                upperExpression : "=DATE_ADD($'MIN', 1 ,\"MONTH\")"
            },
            {
                name : "Last Month",
                lowerExpression : "=DATE_SUB($'MAX', 1 ,\"MONTH\")",
                upperExpression : "=$'MAX'"
            }
        ],

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.ranges) {
                    this.ranges = options.ranges;
                }
                if (options.facetsAttribute) {
                    this.facetsAttribute = options.facetsAttribute;
                }
            }

            this.listenTo(this.config, "change:selection", this.render);
            this.render();
        },

        events: {
            "click .select" : function(e) {
                var val = $(e.target).attr("data-attr");
                var ranges = this.jsonData.ranges;
                for (i=0; i<ranges.length; i++) {
                    if (ranges[i].val === val) {
                        this.updateSelection(ranges[i].lowerExpression, ranges[i].upperExpression);
                    }
                }

                var filtersSelection = this.filters.get("selection");
                if (val === "custom") {
                    if (filtersSelection) {
                        var facets = filtersSelection[this.facetsAttribute];
                        if (facets) {
                            for (ix=0; ix<facets.length; ix++) {
                                if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].dimension.valueType === "DATE") {
                                    if (facets[ix].selectedItems.length > 0) {
                                        this.updateSelection(facets[ix].selectedItems[0].lowerBound, facets[ix].selectedItems[0].upperBound);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        updateSelection: function(lowerExpression, upperExpression) {
            // set the period facet
            var period = this.config.get("period");
            if (period) {
                var periodId = period[Object.keys(period)[0]];
                var selectionClone = $.extend(true, {}, this.config.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone[this.facetsAttribute];
                    if (!facets && (this.facetsAttribute !== "facets")) {
                        // init the period facets (case of compareTo empty)
                        facets = [];
                        for (var i1=0; i1<selectionClone.facets.length; i1++) {
                            if (selectionClone.facets[i1].id === periodId) {
                                facets.push($.extend(true, {}, selectionClone.facets[i1]));
                                break;
                            }
                        }
                    }

                    if (facets) {
                        if (lowerExpression && upperExpression) {
                            for (var i=0; i<facets.length; i++) {
                                if (facets[i].id === periodId) {
                                    facets[i].selectedItems[0].lowerBound = lowerExpression;
                                    facets[i].selectedItems[0].upperBound = upperExpression;
                                }
                            }

                        } else {
                            facets = null;
                        }
                        selectionClone[this.facetsAttribute] = facets;
                    }
                }

                // set config selection
                this.config.set("selection", selectionClone);
            } else {
                console.error("No period found in config");
            }
        },

        statusUpdate: function() {
            if (this.status.get("status") === "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },
        currentlySelected: function(range) {
            var selection = this.config.get("selection");
            var selected = false;
            if (selection) {
                var facets = selection[this.facetsAttribute];
                if (facets) {
                    for (ix=0; ix<facets.length; ix++) {
                        if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].dimension.valueType === "DATE" && facets[ix].selectedItems.length > 0) {
                            if (facets[ix].selectedItems[0].lowerBound === range.lowerExpression && facets[ix].selectedItems[0].upperBound === range.upperExpression) {
                                selected = true;
                                break;
                            }
                        }
                    }
                }
            }
            return selected;
        },
        render: function() {
            var selection = this.config.get("selection");
            var range;
            this.jsonData = {
                ranges : []
            };

            // construct data
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                range.selected = this.currentlySelected(range);
                range.val = range.name.replace(" ", "-");
                this.jsonData.ranges.push(range);
            }

            // render html
            var html = this.template(this.jsonData);
            this.$el.html(html);

            // detect currently selected expression range
            var count = 0;
            var dateFacets = 0;
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                if (this.currentlySelected(range) === true) {
                    this.$el.find("select").val(range.val);
                }
            }
            if (dateFacets > 0) {
                if (count === 0) {
                    this.$el.find("select").val('custom');
                }
            } else {
                this.$el.find("select").remove();
            }

            return this;
        }
    });

    return View;
}));
