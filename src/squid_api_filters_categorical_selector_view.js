(function (root, factory) {
    root.squid_api.view.CategoricalSelectorView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        facetList : null,
        avoidFacets : null,

        initialize : function(options) {
            this.config = squid_api.model.config;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }

            this.listenTo(this.model, "change:selection", this.renderSelection);
            this.render();
            this.renderSelection();
        },
        
        render : function() {
            var me = this;

            this.$el.find(".btn-select-filter").multiselect({
                nonSelectedText: 'Select Filter',
                enableHTML : true,
                onChange: function(option) {
                    var filterValue = $(option).val();
                    me.filterStore.set("selectedFilter", filterValue);
                }
            });
        },

        loadCollection : function(parentId) {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(parentId).then(function(domain) {
                        return domain.get("dimensions").load();
                    });
                });
            });
        },

        renderSelection : function() {
            var me = this;

            if (this.model.get("selection")) {
                var selectedFilter = me.filterStore.get("selectedFilter");
                var facets = this.model.get("selection").facets;
                var items = [];
                if (this.model.get("selection")) {
                    for (i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        var json = {
                            label : facet.name,
                            title : facet.name,
                            value : facet.id,
                            disabled : true,
                        };
                        if (facet.id == selectedFilter) {
                            json.selected = true;
                        }
                        if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                            json.disabled = false;
                        }

                        if (this.facetList) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === facet.id) {
                                    items.push(json);
                                }
                            }
                        }
                        else {
                            items.push(json);
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<items.length; ix++) {
                                if (this.avoidFacets[i] === items[ix].value) {
                                    items.splice(ix, 1);
                                }
                            }
                        }
                    }

                    var select = this.$el.find(".btn-select-filter");
                    select.multiselect('dataprovider', items);

                    // Detect List Length for display purposes
                    if (items.length >= 10) {
                        select.siblings(".btn-group").addClass("largeList");
                    }

                    this.$el.find("label").click(function() {
                       if ($(this).parents("li").hasClass("disabled")) {
                           // index if value is disabled when clicked
                           var value = $(this).find("input").val();

                           me.loadCollection(me.config.get("domain")).done(function(collection) {
                               var facetModel = _.where(me.model.get("selection").facets, {"id":value});
                               if (facetModel[0]) {
                                   var dimensionId = facetModel[0].dimension.oid;
                                   var getModel = collection.where({oid : dimensionId});
                                   if (getModel.length > 0) {
                                       var model = getModel[0];
                                       model.set("type", "CATEGORICAL");
                                       model.save(null, {
                                           success: function() {
                                               me.config.trigger("change:selection");
                                           }
                                       });
                                   }
                               }
                           }).fail(function() {
                               console.warn("Couldn't load collection");
                           });

                           // trigger filters change
                       }
                    });
                }
            }
        }
    });

    return View;
}));
