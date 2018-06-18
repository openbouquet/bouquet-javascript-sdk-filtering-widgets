(function (root, factory) {
    "use strict";
    root.squid_api.view.MySelectionsWidget = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {
    "use strict";
    View = Backbone.View.extend( {

        template : null,

        initialize : function(options) {
            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                }
            }
        },

        render : function() {
            this.$el.html(this.template);
            return this;
        }

    });

    return View;
}));