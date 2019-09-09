(function (root, factory) {
    root.squid_api.view.FiltersSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_FiltersSelector);
}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model : null,
        template : template,

        initialize : function(options) {
            this.config = squid_api.model.config;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            }
            if (options.onSelectFacet) {
                this.onSelectFacet = options.onSelectFacet;
            }

            this.listenTo(this.model, "change", this.render);

            // render view
            this.render();
        },

        getSelectionsUrl : function() {
            var projectId = this.config.get("project");
            var bookmarkId = this.config.get("bookmark");

            var selectionsUrl =  squid_api.apiBaseURL + "/rs/projects/" + projectId +
                "/bookmarks/" + bookmarkId + "/myselections";
            return selectionsUrl;
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var parent = $(event.currentTarget).parent("li");
                var facetId = parent.parent("ul").data("id");
                var itemId = parent.data("id");
                this.onRemoveItem(facetId, itemId);
            },
            "click .facet" : function(event) {
                // Obtain facet name / value
                var facetId = $(event.currentTarget).data("id");
                var facetName = $(event.currentTarget).text();
                if (this.onSelectFacet) {
                    this.onSelectFacet(facetId, facetName);
                }
            },
            "click .reset-filters" : function() {
                var me = this;
                var projectId = this.config.get("project");
                var bookmarkId = this.config.get("bookmark");
                var confirmUpdateMsg = "Are you sure you would like to reset filters?";
                if (typeof $.i18n !== "undefined") {
                	confirmUpdateMsg = $.i18n.t("reset_filters_confirm");
                }
                if (confirm(confirmUpdateMsg)) {
                    // get the Bookmark
                    squid_api.getCustomer().then(function(customer) {
                        customer.get("projects").load(projectId).then(function(project) {
                            project.get("bookmarks").load(bookmarkId).done(function(bookmark) {
                                var forcedConfig = {};
                                var config = me.config.toJSON();
                                // exclude the selection from re-setting the config
                                for (var x in config) {
                                    if (x !== "selection") {
                                        forcedConfig[x] = config[x];
                                    }
                                }
                                // set bookmark
                                squid_api.setBookmark(bookmark, forcedConfig);
                            }).fail(function(model, response, options) {
                                console.error("bookmark fetch failed : " + bookmarkId);
                            });
                        });
                    });
                }

             },
            "click .my-selections" : function() {
                var me = this;
                $.ajax({url: this.getSelectionsUrl() + "?access_token=" + squid_api.model.login.get("accessToken"),
                    headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}})
                    .done(function(selections) {
                        var options = {
                            template : squid_api.template.squid_api_filters_my_selections,
                            data : {selections: selections},
                            close : function() { me.selectionsModal.close(); }
                        };

                        if (!me.selectionsModal) {
                            me.mySelectionsWidget = new squid_api.view.MySelectionsWidget(options);
                            me.selectionsModal = new squid_api.view.ModalView({
                                view : me.mySelectionsWidget
                            });
                        }
                        else {
                            me.mySelectionsWidget.initialize(options);
                        }
                        me.selectionsModal.render();
                });
            }
        },

        onRemoveItem : function(facetId, itemId) {
            // Copy model selection object properties to remove object reference
            var selectionClone = $.extend(true, {}, this.config.get("selection"));
            if (selectionClone) {
                var facets = selectionClone.facets;
                if (facets) {
                    // Remove selected item from facet
                    squid_api.controller.facetjob.unSelect(facets, facetId, itemId);
                    squid_api.setConfigSelection(selectionClone);
                }
            }
        },

        filteredFacetIndex: function(elements, id) {
        	if (elements === null) {
        		return null;
        	}
        	for (var i=0; i<elements.length; i++) {
        		if (elements[i] === id) { return i; }
        	}
        	return -1;
        },

        render : function() {
            var selFacets = [];
            var noData = true;
            var filteredFacets  = null;
            var orderByConfig = false;
            if (squid_api && squid_api.model.config.get("chosenFacets")) {
            	filteredFacets = squid_api.model.config.get("chosenFacets");
            	selFacets = Array.apply(null, Array(filteredFacets.length));
            	if (typeof squid_api.model.config.get("orderByConfig") !== "undefined") {
            		orderByConfig = squid_api.model.config.get("orderByConfig");
            	}
            }
            if (this.model) {
                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        noData = false;
                        var facets = selection.facets;
                        for (i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            var index = this.filteredFacetIndex(filteredFacets, facet.id);
                            if (index === null) {
                            	index = i;
                            }
                        	if (index !== -1) {
	                            var selFacet = {
	                                    "id" : facet.id,
	                                    "name" : facet.name ? facet.name : facet.dimension.name,
	                                    "items" : []
	                            };
	                            var selectedItems = facet.selectedItems;
	                            for (ix = 0; ix < selectedItems.length; ix++) {
	                                selFacet.items.push({
	                                        "id" : selectedItems[ix].id,
	                                        "name" : selectedItems[ix].value
	                                });
	                            }
	                            selFacet.available = (facet.dimension.type === "CATEGORICAL" || facet.dimension.type === "SEGMENTS" || selFacet.items.length > 0) && facet.dimension.valueType !== "DATE";
                        		if (orderByConfig === true) {
                        			selFacets.splice(index, 1, selFacet);
                        		} else {
                        			selFacets.splice(i, 1, selFacet);
                        		}
                        	}
                        }
                    }
                }
            }

            this.$el.html(this.template({
                facets : selFacets,
                noData : noData,
                noDataMessage : this.noDataMessage
            }));
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }

        }
    });

    return View;
}));
