(function (root, factory) {
    root.squid_api.view.DateRangeSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_range_selection_widget);

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

            //this.listenTo(this.model, "change:facets", this.render);
            this.render();
        },

        events: {
            "click .30-days": function(e) {
                console.log("30 days");
            },
            "click .60-days": function(e) {
                console.log("60 days");
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
            // render html
            var html = this.template();
            this.$el.html(html);

            return this;
        }
    });

    return View;
}));
