(function (root, factory) {
    root.squid_api.view.CategoricalPagingView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
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

            this.listenTo(this.model, "change:itemIndex", this.render);
            this.listenTo(this.model, "change:pageIndex", this.render);
            this.listenTo(this.model, "change:facet", this.resetAndRender);
            this.render();
        },

        events : {
            "click li" : function(event) {
                event.preventDefault();
                event.stopPropagation();
                var pageId = $(event.currentTarget).data("id");
                var pageIndex = this.model.get("pageIndex");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");
                var pageSize = this.model.get("pageSize");
                this.itemClicked = "number";
                if (pageId == "prev") {
                	if (pageIndex>0) {
                        this.model.set("itemIndex", 0, {silent: true});
                		this.model.set("pageIndex", Math.max(pageIndex - nbPages, 0));
                	}
                    this.itemClicked = "prev";
                } else if (pageId == "next") {
                	if (this.model.get("facet").get("hasMore") === true) {
                        this.model.set("itemIndex", 0, {silent: true});
                		this.model.set("pageIndex", pageIndex + nbPages);
                	}
                    this.itemClicked = "next";
                } else {
                    this.model.set("itemIndex", (pageId-1)*pageSize);
                }
            }
        },

        resetAndRender : function() {
        	this.model.set("itemIndex", 0, {silent: true});
        	this.render();
        },
        
        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");

                //Sometimes initial facet jobs continue to be rendered even after page click
                if (facetItems && facetItems.length>0) {
                    var next = false;
                    if (facet.get("hasMore")) {
                        next = true;
                    }
                    
                    firstPageIndex=pageIndex;
	                var pageCount = facetItems.length / pageSize;
 
	                var pages = [];
	                if (pageCount>1 || pageIndex>0) {
	                    if (pageCount>nbPages) {
	                        pageCount = nbPages;
	                    }
	                    var prev = (firstPageIndex === 0) ? false : true;

	                    for (var i=firstPageIndex; i<(firstPageIndex+pageCount); i++) {
	                        var selected = null;
	                        if (i == itemIndex/pageSize) {
	                            selected = true;
	                        }
	                        pages.push({ "id" : i+1, "selected" :  selected});
	                    }

	                    this.$el.html(squid_api.template.squid_api_filters_categorical_paging_view({
	                        "prev" : prev,
	                        "pages" : pages,
	                        "next" : next
	                    }));
	                } else {
	                    this.$el.html("");
	                }
                }
            }
        }
    });

    return View;
}));