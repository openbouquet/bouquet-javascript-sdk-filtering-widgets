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
        dateLimit: false,
        datePickerPosition: null,

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
            if (options.dateLimit) {
                this.dateLimit = options.dateLimit;
            }
           if (options.datePickerPosition) {
                this.datePickerPosition  = options.datePickerPosition;
            } else {
                this.datePickerPosition = "right";
            }
            if(options.startDateFormat){
                this.startDateFormat = options.startDateFormat;
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
                if (facets) {
                    for (i=0; i<facets.length; i++) {
                        if (!facets[i]) {
                            continue;
                        }

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
                                if (!filtersFacets[ix]) {
                                    continue;
                                }

                                if (filtersFacets[ix].id == facet.id) {
                                    if (! filtersFacets[ix].done && filtersFacets[ix].items) {
                                        if (filtersFacets[ix].items.length === 0) {
                                            viewData.notDone = true;
                                        }
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
                                            dates.currentStartDate = moment(selectedItems.lowerBound).utc();
                                            dates.currentEndDate = moment(selectedItems.upperBound).utc();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // compare
                    var results = filters.get("results");
                    if (results) {
                        var compareTo = results.compareTo;
                        if (compareTo && compareTo[0]) {
                            var compareItem = compareTo[0].selectedItems[0];
                            dates.compareStartDate = moment(compareItem.lowerBound).utc();
                            dates.compareEndDate = moment(compareItem.upperBound).utc();
                        }
                    }

                }

                // set view data
                viewData.facet = facet;
                if (dates.currentStartDate && dates.currentEndDate) {
                    viewData.dateAvailable = true;
                    viewData.dateDisplay = dates.currentStartDate.format("ll") + " - " + dates.currentEndDate.format("ll");
                    if (dates.compareStartDate && dates.compareEndDate) {
                        viewData.dateCompareDisplay = dates.compareStartDate.format("ll") + " - " + dates.compareEndDate.format("ll");
                    }
                }

                // months only display logic
                if (this.monthsOnlyDisplay && dates.currentStartDate && dates.currentEndDate) {
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var d1 = dates.currentStartDate;
                    var d2 = dates.currentEndDate;
                    if ((d1.month() == d2.month()) && (d1.year() == d2.year())) {
                        viewData.dateDisplay = monthNames[d1.month()] + " "  + d1.year();
                    } else {
                        viewData.dateDisplay =  monthNames[d1.month()] + " " + d1.year() + " - " + monthNames[d2.month()] + " " + d2.year();
                    }
                    if (dates.compareStartDate && dates.compareEndDate) {
                        var dc1 = dates.compareStartDate;
                        var dc2 = dates.compareEndDate;
                        if ((dc1.month() == dc2.month()) && (dc1.year() == dc2.year())) {
                            viewData.dateCompareDisplay = monthNames[dc1.month()] + " "  + dc1.year();
                        } else {
                            viewData.dateCompareDisplay =  monthNames[dc1.month()] + " " + dc1.year() + " - " + monthNames[dc2.month()] + " " + dc2.year();
                        }
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
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            /*
                responsible for updating a given date facet with a new start / end date.
             */
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var selection =  $.extend(true, {}, this.filters.get("selection"));
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
            var lang = navigator.language || navigator.userLanguage;
            moment.locale(lang);

            var applyLabel= 'Apply',
            cancelLabel= 'Cancel',
            fromLabel= 'From',
            toLabel= 'To';
            if (typeof $.i18n !== "undefined") {
            	applyLabel= $.i18n.t("applyLabel");
                cancelLabel= $.i18n.t("cancelLabel");
                fromLabel= $.i18n.t("fromLabel");
                toLabel= $.i18n.t("toLabel");
            }
            this.$el.find(".widget").daterangepicker({
                format: 'YYYY-MM-DD',
                locale: {
                    applyLabel: applyLabel,
                    cancelLabel: cancelLabel,
                    fromLabel: fromLabel,
                    toLabel: toLabel
                },
                opens: this.datePickerPosition,
                showDropdowns: true,
                dateLimit: this.dateLimit,
                startDate: dates.currentStartDate ? dates.currentStartDate.format('YYYY-MM-DD') : null,
                endDate: dates.currentEndDate ? moment(dates.currentEndDate).utc().endOf('month').format('YYYY-MM-DD') : null,
                minDate : dates.minDate ? dates.minDate.format('YYYY-MM-DD') : moment().utc().subtract("50", "years").format("YYYY-MM-DD"),
                maxDate : dates.maxDate ? dates.maxDate.format('YYYY-MM-DD') : moment().utc().format("YYYY-MM-DD"),
            });

            if(this.startDateFormat){
                this.$el.find(".widget").daterangepicker({
                    startDateFormat : this.startDateFormat
                });
            }
            
            // apply action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = picker.startDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                var endDate = picker.endDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
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
