(function (root, factory) {
    root.squid_api.view.FiltersSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_FiltersSelector);
}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model : null,
        template : template,

        initialize : function(options) {
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
                if (this.onSelectFacet) {
                    this.onSelectFacet(facetId);
                }
            }
        },

        onRemoveItem : function(facetId, itemId) {
            // Copy model selection object properties to remove object reference
            var selectionClone = $.extend(true, {}, this.model.get("selection"));
            if (selectionClone) {
                var facets = selectionClone.facets;
                if (facets) {
                    // Remove selected item from facet
                    squid_api.controller.facetjob.unSelect(facets, facetId, itemId);
                    squid_api.model.config.set("selection", selectionClone);
                }
            }
        },

        render : function() {
            var selFacets = [];
            var noData = true;
            if (this.model) {
                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        noData = false;
                        var facets = selection.facets;
                        for (i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            if (facet.dimension.type === "CATEGORICAL" || facet.dimension.type === "SEGMENTS") {
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
                                selFacets.push(selFacet);
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
        }
    });

    return View;
}));
