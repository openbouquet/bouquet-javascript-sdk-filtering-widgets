(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.SegmentSelector = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        segment : null,
        displayName : null,
        onCheck : null,
        template : squid_api.template.squid_api_filters_segment_widget,
        disabled : false,

        initialize : function(options) {
            this.segment = options.segment;
            this.displayName = options.displayName;
            this.config = squid_api.model.config;
            if (options.onCheck) {
                this.onCheck = options.onCheck;
            } else {
                this.onCheck = "set";
            }
            // in order to replace segment when checkbox is on / off
            if (options.replaceWith) {
                this.replaceWith = options.replaceWith;
            }

            if (this.config) {
                this.listenTo(this.config, 'change:selection', this.render);
            }

            // listen for global status change
            this.listenTo(squid_api.model.status, 'change:status', this.render);
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.disabled === false) {
                    this.disabled = true;
                    var segment = this.getSegment();

                    var selection = $.extend(true, {}, this.config.get("selection"));
                    if (segment !== null) {
                        var selectedItems = segment.selectedItems;
                        var selectedItemsUpdated = [];
                        var isChecked = event.target.checked;
                        if (this.onCheck == "unset") {
                            isChecked = !isChecked;
                        }
                        for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                            var item = selectedItems[sIdx];
                            if (isChecked || (item.id !== this.segment)) {
                                if (item.id !== this.replaceWith) {
                                    selectedItemsUpdated.push(item);
                                }
                            }
                        }
                        if (this.replaceWith) {
                            if (! isChecked) {
                                selectedItemsUpdated.push({"id" : this.replaceWith, "type" : "v"});
                            }
                        }
                        if (isChecked) {
                            selectedItemsUpdated.push({"id" : this.segment, "type" : "v"});
                        }

                        // update config selection
                        if (selection) {
                            if (selection.facets) {
                                var facets = selection.facets;
                                for (i=0; i<facets.length; i++) {
                                    if (facets[i].dimension.type == "SEGMENTS") {
                                        facets[i].selectedItems = selectedItemsUpdated;
                                    }
                                }
                                selection.facets = facets;
                            }
                        }
                        this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
                    }
                }
            }
        },

        getSegment : function() {
            var segment = null;
            var selection = this.config.get('selection');
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // lookup segment facet
                    for (var fIdx = 0; fIdx < facets.length; fIdx++) {
                        var facet = facets[fIdx];
                        if (facet.dimension.type == "SEGMENTS") {
                            // check if the segment is selected
                            segment = facet;
                        }
                    }
                }
            }
            return segment;
        },

        render : function() {
            var selHTML = null;
            var isSelected = false;
            if (this.config) {
                // check if the segment is selected
                var segment = this.getSegment();
                if (segment) {
                    var selectedItems = segment.selectedItems;
                    for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                        var item = selectedItems[sIdx];
                        if (item.id == this.segment) {
                            isSelected = true;
                        }
                    }
                }

                if (this.onCheck == "unset") {
                    isSelected = !isSelected;
                }

                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "isSelected" : isSelected,
                    "displayName" : this.displayName,
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            // treat global status
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running === true) {
                // computation is running : disable input
                this.$el.find("input").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.disabled = false;
                this.$el.find("input").removeAttr("disabled");
            }

            return this;
        }

    });

    return View;
}));
