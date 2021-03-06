(function (root, factory) {
    "use strict";
    root.squid_api.view.MySelectionsWidget = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {
    "use strict";
    View = Backbone.View.extend( {

        template : null,

        initialize : function(options) {
            this.config = squid_api.model.config;
            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                }
                if (options.data) {
                    this.data = options.data;
                    this.data.message = "";
                    this.data.errorMessage = "";
                    this.data.searchTerm = "";
                }
                if (options.close) {
                    this.close = options.close;
                }
            }
        },

        getSelectionsUrl : function() {
            var projectId = this.config.get("project");
            var bookmarkId = this.config.get("bookmark");

            var selectionsUrl =  squid_api.apiBaseURL + "/rs/projects/" + projectId +
                "/bookmarks/" + bookmarkId + "/myselections";
            return selectionsUrl;
        },

        startRequest: function() {
            $("#selections-search-in-progress").removeClass("hidden");
            $("#selections-search-not-in-progress").hide();
        },

        finishRequest: function(message, errorMessage) {
            $("#selections-search-in-progress").addClass("hidden");
            $("#selections-search-not-in-progress").show();

            this.data.message = message;
            this.data.searchTerm = "";
            this.data.errorMessage = errorMessage;
            this.render();
        },

        updateSelection : function(myBookmarkSelectionId, name, selection) {
            var me = this;
            var projectId = this.config.get("project");
            var bookmarkId = this.config.get("bookmark");

            var newSelection = {
                id: {
                  projectId: projectId,
                  bookmarkId: bookmarkId
                },
                name: name,
                selection: selection
            };

            this.startRequest();

            $.ajax({
                url: this.getSelectionsUrl() + "/" + myBookmarkSelectionId,
                method: "PUT",
                contentType: "text/json",
                data: JSON.stringify(newSelection),
                headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}
            }).done(function() {
                for(var i=0; i<me.data.selections.length; i++) {
                    if (me.data.selections[i].id.myBookmarkSelectionId === myBookmarkSelectionId) {
                        me.data.selections[i].name = name;
                        break;
                    }
                }
                me.finishRequest("Selection '" + name + "' updated", "");
            }).fail(function() {
                me.finishRequest("", "Failed to update '" + name + "'!");
            });
        },

        events : {

            "input #new-selection" : function(event) {
                var name = $(event.target).val();
                $("#create-selection").attr("disabled", name.length === 0);
            },

            "click #create-selection" : function(event) {
                var me = this;
                var projectId = this.config.get("project");
                var bookmarkId = this.config.get("bookmark");

                var name = $("#new-selection").val();
                var newSelection = {
                    id: {
                      projectId: projectId,
                      bookmarkId: bookmarkId
                    },
                    name: name,
                    selection: squid_api.model.config.attributes.selection
                };

                var existingSelections = $.grep(this.data.selections, function(elem) {
                    return elem.name === name;
                });

                if (existingSelections.length > 0) {
                    this.updateSelection(existingSelections[0].id.myBookmarkSelectionId, name, newSelection);
                }
                else {
                    this.startRequest();

                    $.ajax({
                        url: this.getSelectionsUrl(),
                        method: "POST",
                        contentType: "text/json",
                        data: JSON.stringify(newSelection),
                        headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}
                    }).done(function(newSelection) {
                        me.data.selections.push(newSelection);
                        me.finishRequest("", "");
                    }).fail(function() {
                        me.finishRequest("", "Failed to add new selection!");
                    });
                }
            },

            "click .my-selection-name" : function(event) {
                var me = this;
                var bookmarkId = this.config.get("bookmark");
                var myBookmarkSelectionId = $(event.target).parent().data("id");

                var mySelection = $.grep(this.data.selections, function(elem) {
                    return elem.id.myBookmarkSelectionId === myBookmarkSelectionId;}
                )[0].selection;

                var forcedConfig = me.config.toJSON();
                forcedConfig.selection = mySelection;
                squid_api.model.config.attributes.selection = mySelection;

                squid_api.setBookmarkId(bookmarkId, forcedConfig, [{"mySelection":true}]);

                this.close();
            },

            "click .selection-rename" : function(event) {
                $(event.target).parent().find(".selection-view-control").hide();
                $(event.target).parent().find(".selection-rename-control").show();
            },

            "click .selection-rename-ok" : function(event) {
                $(event.target).parent().find(".selection-rename-control").hide();
                $(event.target).parent().find(".selection-rename-control").show();

                var myBookmarkSelectionId = $(event.target).parent().data("id");
                var name = $(event.target).parent().find(".my-selection-name-rename").val();

                var selection = $.grep(this.data.selections, function(elem) {
                    return elem.id.myBookmarkSelectionId === myBookmarkSelectionId;
                })[0].selection;

                this.updateSelection(myBookmarkSelectionId, name, selection);
            },

            "click .selection-rename-cancel" : function(event) {
                $(event.target).parent().find(".selection-rename-control").hide();
                $(event.target).parent().find(".selection-view-control").show();
            },

            "click .selection-update" : function(event) {
                var name = $(event.target).parent().find(".my-selection-name ").text();
                if (confirm("Are you sure you want to update '" + name + "' with the current selection?")) {
                    $(event.target).parent().find(".selection-rename-control").hide();
                    $(event.target).parent().find(".selection-rename-control").show();

                    var myBookmarkSelectionId = $(event.target).parent().data("id");

                    this.updateSelection(myBookmarkSelectionId, name, squid_api.model.config.attributes.selection);
                }
            },

            "click .selection-remove" : function(event) {
                var name = $(event.target).parent().find(".my-selection-name ").text();
                if (confirm("Are you sure you want to delete '" + name + "'?")) {
                    var me = this;
                    var myBookmarkSelectionId = $(event.target).parent().data("id");

                    this.startRequest();

                    $.ajax({
                        url: this.getSelectionsUrl() + "/" + myBookmarkSelectionId,
                        method: "DELETE",
                        headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}
                    }).done(function() {
                        me.data.selections = $.grep(me.data.selections, function(elem) {
                            return elem.id.myBookmarkSelectionId !== myBookmarkSelectionId;
                        });
                        me.finishRequest("", "");
                    }).fail(function() {
                        me.finishRequest("", "Failed to remove selection!");
                    });
                }
            },

            "input #selections-searchbox" : function(event) {
                var text = $(event.target).val();
                this.data.searchTerm = text;

                if (text.length === 0) {
                    $(".my-selection").show();
                }
                else {
                    var ltext = text.toLowerCase();
                    $(".my-selection").each(function() {
                        var name = $(this).find(".my-selection-name").text().toLowerCase();
                        if (name.indexOf(ltext) >= 0) {
                            $(this).show();
                        }
                        else {
                            $(this).hide();
                        }
                    });
                }

            }
        },

        render : function() {
            this.$el.html(this.template(this.data));
            return this;
        }

    });

    return View;
}));