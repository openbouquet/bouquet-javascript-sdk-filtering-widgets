(function (root, factory) {
    root.squid_api.view.CategoricalFacetView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filters: null,
        format : null,
        noFiltersMessage : null,
        singleSelect : false,
        disabled : false,
        onChange : null,

        initialize : function(options) {
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.timeFormat("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.filters) {
                this.filters = options.filters;
            } else {
                this.filters = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_filters_categorical_facet_view;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.onChange) {
                this.onChange = options.onChange;
            }
            if (options.mandatorySelection) {
                this.mandatorySelection = options.mandatorySelection;
            }

            //this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.model, "change:itemIndex", this.render);
            this.listenTo(this.model, "change:pageIndex", this.render);
            this.listenTo(this.model, "change:facet", this.render);
            this.listenTo(this.status, "change", this.widgetState);

            this.render();
        },

        widgetState: function() {
        	// treat global status
            var running = (this.status.get("status") != this.status.STATUS_DONE);
            if (running === true) {
                // computation is running
            } else {
                // computation is done : enable input
                this.disabled = false;
            }
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                if (this.disabled === false) {
                    this.disabled = true;
                    // Get selected Filter & Item
                    var selectedFilter = this.model.get("selectedFilter");
                    var target = $(item.currentTarget);

                    // Get clicked filter value & create object
                    var value = target.attr("data-value");
                    var type = target.attr("data-type");
                    var id = target.attr("data-id");
                    var attributes = target.attr("data-attr");
                    
                    //T2726: useless as selectionClone is saved at the end, not this copy
                    //var configSelection = $.extend(true, {}, squid_api.model.config.get("selection"));
                    //var configSelectionFacets = configSelection.facets;

                    // Get selected Filters
                    var selectionClone = $.extend(true, {}, this.filters.get("selection"));
                    var facets = selectionClone.facets;

                    if (target.attr("selected")) {
                        // Style manipulation
                        target.removeClass("active");
                        target.removeAttr("selected");

                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, selectedFilter, id);

                    } else {
                        // style manipulation
                        target.addClass("active");
                        target.attr("selected", true);

                        // set up object to add a new selected item
                        var selectObj = {id : id, type : type, value : value};
                        // add attributes if exist
                        if (attributes && attributes.length>0) {
                        	selectObj.attributes = JSON.parse(attributes);
                        }

                        // Push new filters to selectedItems array
                        var selectedFacet;
                        for (var i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id === selectedFilter) {
                                selectedFacet = facet;
                                if (this.singleSelect) {
                                    facet.selectedItems = [selectObj];
                                } else {
                                    facet.selectedItems.push(selectObj);
                                }
                            }
                        }
                        
                        /*
                        var configSelectedFacet;
                        var selectedFacet1;
                        for (var i1=0; i1<configSelectionFacets.length; i1++) {
                            var facet1 = configSelectionFacets[i1];
                            if (facet1.id === selectedFilter) {
                                selectedFacet1 = facet1;
                                facet1.selectedItems = selectedFacet.selectedItems;
                            }
                        }
                        if (!selectedFacet1) {
                            configSelectionFacets.push(selectedFacet);
                        }
                        */
                        
                        // Remove selected items from children
                        //T2726: this has to be done on selectionClone.facets to be effective
                        squid_api.controller.facetjob.unSelectChildren(facets, selectedFacet, false);

                        //Handle callback when selection changed
                        if (this.onChange) {
                        	this.onChange(facets, selectedFacet);
                        }
                    }

                    // set config with updated selection
                    squid_api.setConfigSelection(selectionClone);
                }
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            var message = null;
            var computingInProgress = false;
            var updatedItems = [];

            if (facet && this.filters) {
                this.$el.addClass("min-filter-height");

                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                // display current facet members
                var startIndex = itemIndex -(pageIndex * pageSize);
                var endIndex = startIndex + pageSize;

                var selectedFilter = this.model.get("selectedFilter");
                var selection = this.filters.get("selection");
                if (endIndex > facetItems.length) {
                    endIndex = facetItems.length;
                }

                if (startIndex >= 0 && selection) {
                    var items = [];
                    var facets = selection.facets;
                    for (ix=startIndex; ix<endIndex; ix++) {
                        items.push(facetItems[ix]);
                    }

                    // Manipulate items to add a selected or not attribute
                    for (ix=0; ix<facets.length; ix++) {
                    	currentFacet = facets[ix];
                        if (selectedFilter === currentFacet.id) {
                            var selectedItems = currentFacet.selectedItems;
                            for (ix1=0; ix1<items.length; ix1++) {
                                var obj = items[ix1];
                                obj.selected = false;
                                if  (obj.attributes) {
                                	obj.dataAttr = JSON.stringify(obj.attributes);
                                }
                                for (ix2=0; ix2<selectedItems.length; ix2++) {
                                    if (items[ix1].id === selectedItems[ix2].id) {
                                        obj.selected = true;
                                        break;
                                    }
                                }
                                updatedItems.push(obj);
                            }
                            var options = currentFacet.dimension.options;
                            if (Array.isArray(options)) {
                            	for (ix1=0; ix1<options.length; ix1++) {
                            		if (typeof options[ix1].singleSelection !== 'undefined' && options[ix1].singleSelection) {
                            			this.singleSelect=options[ix1].singleSelection;
                            		}
                            	}
                            }
                        }
                    }
                }

                // set the message
                if (facet.get("done") === true) {
                    if ((facet.get("hasMore") === true) && (updatedItems.length < pageSize)) {
                        message = "Partial results (computation pending)";
                        if (typeof $.i18n !== "undefined") {
                        	message = $.i18n.t("partialResults");
                        }
                   } else if (!facetItems || facetItems.length === 0) {
                        message = "No Items";
                        if (typeof $.i18n !== "undefined") {
                        	message = $.i18n.t("noItems");
                        }
                       this.$el.removeClass("min-filter-height");
                    }
                    computingInProgress = false;
                } else {
                    message = "Computing in progress";
                    if (typeof $.i18n !== "undefined") {
                    	message = $.i18n.t("runningMessage");
                    }
                   computingInProgress = true;
                }

            } else {
                message = this.noFiltersMessage;
                this.$el.removeClass("min-filter-height");
            }

            // Trim spaces from Account Name id
            $.each(updatedItems, function(index, item){
                item.id = item.id.trim();
            });

            var html = this.template({
                "items" : updatedItems, "message" : message, "computingInProgress" : computingInProgress
            });

            this.$el.html(html);
        }

    });

    return View;
}));
