(function (root, factory) {
    root.squid_api.view.DateSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model: null,
        ranges : null,
        rangesPresets : {
            'all': function(min, max) {
                return [moment(min).utc(), moment(max).utc()];
            },
            'first-month': function(min, max) {
                return [moment(min).utc().startOf('month'), moment(min).utc().endOf('month')];
            },
            'last-month': function(min, max) {
                return [moment(max).utc().startOf('month'), moment(max).utc().endOf('month')];
            }
        },
        monthsOnlyDisplay : false,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition  = options.datePickerPosition;
            }
            if (options.monthsOnlyDisplay) {
                this.monthsOnlyDisplay = options.monthsOnlyDisplay;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);

            // listen for global status change
            this.listenTo(this.status, "change:status", this.statusUpdate);
        },

        events: {
            "click .refresh-facet": function() {
                // allow the user to refresh the given facet
                var me = this;
                var periods = this.config.get("period");
                var periodId = periods[this.config.get("domain")];

                // add spinning class
                this.$el.find(".refresh-facet i").addClass("fa-spin");
                this.$el.find(".refresh-facet span").text("refreshing");
                
                // get facet members for period facet
                squid_api.controller.facetjob.getFacetMembers(this.filters, periodId).done(function() {
                     me.render();
                });
            }
        },

        statusUpdate: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },

        render: function() {
            /*
               responsible for printing the currently selected date facets selectedItems (active dates)
             */
            var configPeriod = this.config.get("period");
            var domain = this.config.get("domain");
            var selection = this.config.get("selection");
            var minMax = {};
            var selectedItems;
            var dates = {};
            var facet = null;
            var resetFacet = false;
            var viewData = {"dateAvailable" : false};

            if (selection) {
                var facets = selection.facets;
                for (i=0; i<facets.length; i++) {
                    // obtain current facet from config if exists
                    if (configPeriod) {
                        if (configPeriod[domain]) {
                            if (facets[i].id == configPeriod[domain]) {
                                facet = facets[i];
                            }
                        }
                    }

                }
            }
            if (facet) {
                viewData.name = facet.name;

                // detect if facet is done or not
                var filters = this.filters;
                if (filters) {
                    var filtersSelection = filters.get("selection");
                    if (filtersSelection) {
                        var filtersFacets = filtersSelection.facets;
                        if (filtersFacets) {
                            for (ix=0; ix<filtersFacets.length; ix++) {
                                if (filtersFacets[ix].id == facet.id) {
                                    if (! filtersFacets[ix].done) {
                                        viewData.notDone = true;
                                    }
                                    // min-max date check
                                    if (filtersFacets[ix].items) {
                                        if (filtersFacets[ix].items.length > 0) {
                                            minMax = filtersFacets[ix].items[0];
                                            dates.minDate = moment(minMax.lowerBound).utc();
                                            dates.maxDate = moment(minMax.upperBound).utc();
                                            dates.currentEndDate = moment(minMax.upperBound).utc();
                                        }
                                    }
                                    // currently selected date check
                                    if (filtersFacets[ix].selectedItems) {
                                        selectedItems = filtersFacets[ix].selectedItems[0];
                                        if (selectedItems) {
                                            // if currently selected date is outside of the min-max range then force an update
                                            if ((minMax.type) && (moment(selectedItems.upperBound).isAfter(dates.maxDate.endOf("day")) || moment(selectedItems.upperBound).isBefore(dates.minDate.startOf("day")) || moment(selectedItems.lowerBound).isAfter(dates.maxDate.endOf("day")) || moment(selectedItems.lowerBound).isBefore(dates.minDate.startOf("day")))) {
                                                this.updateFacet(filtersFacets[ix], dates.minDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000", dates.maxDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000");
                                            } else {
                                                dates.currentStartDate = moment(selectedItems.lowerBound).utc();
                                                dates.currentEndDate = moment(selectedItems.upperBound).utc();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // set view data
                viewData.facet = facet;
                if (dates.currentStartDate && dates.currentEndDate) {
                    viewData.dateAvailable = true;
                    viewData.dateDisplay = dates.currentStartDate.format("ll") + " - " + dates.currentEndDate.format("ll");
                }

                // months only display logic
                if (this.monthsOnlyDisplay && dates.currentStartDate && dates.currentEndDate) {
                    var d1 = dates.currentStartDate;
                    var d2 = dates.currentEndDate;
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    if ((d1.month() == d2.month()) && (d1.year() == d2.year())) {
                        viewData.dateDisplay = monthNames[d1.month()] + " "  + d1.year();
                    } else {
                        viewData.dateDisplay =  monthNames[d1.month()] + " " + d1.year() + " - " + monthNames[d2.month()] + " " + d2.year();
                    }
                }
            }

            // render html
            var html = this.template(viewData);
            this.$el.html(html);

            this.$el.find(".refresh-facet").tooltip({
                placement: "right",
                trigger: "hover"
            });

            // attach date picker if a facet is found
            if (facet) {
                this.renderPicker(facet, dates);
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            /*
                responsible for updating a given date facet with a new start / end date.
             */
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var selection =  $.extend({}, this.filters.get("selection"));
            if (selection) {
                for (var i=0; i<selection.facets.length; i++) {
                    if (selection.facets[i].id == facet.id) {
                        selection.facets[i].selectedItems = obj;
                    }
                }
                this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
            }
        },

        renderPicker : function(facet, dates) {
            /*
                responsible for attaching the date picker with associated events
             */

            var me  = this;

            // compute the ranges
            var pickerRanges = {};
            for (var rangeName in me.ranges) {
                var value = me.ranges[rangeName];
                var func = null;
                if ((typeof value === "string") || (value instanceof String)) {
                    // check for a predefined range
                    if (me.rangesPresets[value]) {
                        func = me.rangesPresets[value];
                    }
                } else {
                    func = value;
                }
                if (func) {
                    pickerRanges[rangeName] = func.call(this, dates.minDate, dates.maxDate);
                }
            }

            // Build Date Picker
            this.$el.find(".widget").daterangepicker({
                opens: me.datePickerPosition,
                format: 'YYYY-MM-DD',
                showDropdowns: true,
                ranges: pickerRanges,
                startDate: dates.currentStartDate ? dates.currentStartDate.format('YYYY-MM-DD') : null,
                endDate: dates.currentEndDate ? dates.currentEndDate.format('YYYY-MM-DD') : null,
                minDate : dates.minDate ? dates.minDate.format('YYYY-MM-DD') : moment().utc().subtract("50", "years").format("YYYY-MM-DD"),
                maxDate : dates.maxDate ? dates.maxDate.format('YYYY-MM-DD') : moment().utc().format("YYYY-MM-DD"),
            });

            // apply action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = picker.startDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                var endDate = picker.endDate.format(squid_api.DATE_FORMAT);
                me.updateFacet(facet, startDate, endDate);
            });

            // automatically trigger first date selection within the month on left calendar change
            this.$el.find("span").on('change.daterangepickerLeft', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });

            // automatically trigger last date selection within the month on right calendar change
            this.$el.find("span").on('change.daterangepickerRight', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });
        }
    });

    return View;
}));
