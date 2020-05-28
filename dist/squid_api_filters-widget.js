this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_filters_categorical_facet_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<ul class=\"squid-api-action\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"active\" selected=\"true\" data-value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-attr=\""
    + alias4(((helper = (helper = helpers.dataAttr || (depth0 != null ? depth0.dataAttr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataAttr","hash":{},"data":data}) : helper)))
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n					</li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li data-value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-attr=\""
    + alias4(((helper = (helper = helpers.dataAttr || (depth0 != null ? depth0.dataAttr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataAttr","hash":{},"data":data}) : helper)))
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n					</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<li></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<span class='no-items'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.computingInProgress : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n	</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"glyphicon glyphicon-refresh\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_categorical_paging_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<li class=\"previous\" data-id=\"prev\"><a href=\"#\"><i class=\"fa fa-arrow-left\"></i></a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a  href=\"#\">"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " class=\"active\" ";
},"6":function(container,depth0,helpers,partials,data) {
    return "		<li class=\"next\"  data-id=\"next\"><a  href=\"#\"><i class=\"fa fa-arrow-right\"></i></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"pagination squid-api-action\">\n	<ul class=\"pagination\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prev : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.next : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_categorical_selected_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <label class=\"noData "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mandatory : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.noDataMessage || (depth0 != null ? depth0.noDataMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"noDataMessage","hash":{},"data":data}) : helper)))
    + "</label>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "warning fa fa-exclamation-circle";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <ul class=\"facets\" id=\"squid_api_filters_categorical_selected_view\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "            <li attr-id=\""
    + alias4(((helper = (helper = helpers.facetItemId || (depth0 != null ? depth0.facetItemId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetItemId","hash":{},"data":data}) : helper)))
    + "\" attr-name=\""
    + alias4(((helper = (helper = helpers.facetNameId || (depth0 != null ? depth0.facetNameId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetNameId","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\"facet-name\">\n                    "
    + alias4(alias5((depth0 != null ? depth0.facetName : depth0), depth0))
    + "\n                </div>\n                <div class=\"facet-value\">\n                    "
    + alias4(alias5((depth0 != null ? depth0.facetItem : depth0), depth0))
    + "\n                </div>\n                <div class=\"facet-remove\">\n                    <i class=\"glyphicon glyphicon-remove\"></i>\n                </div>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-filters-categorical-selected-view\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noData : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_categorical_view_hover_template"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <b>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</b>\n        <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <li> "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-categorical-view-hover-view\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_categorical_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid_api_filters-categorical-panel-view popup\">\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.initialFacet : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div id=\"search\">\n		<div class=\"input-group\">\n		      <span class=\"input-group-addon\">\n		        <i id=\"search-in-progress\" class=\"fa fa-refresh fa-spin hidden\"></i>\n		        <i id=\"search-not-in-progress\" class=\"fa fa-search\"></i>\n		      </span>\n			<input class=\"form-control\" id=\"searchbox\" type=\"search\" placeholder=\"Search for\">\n		</div>\n	</div>\n	<div id=\"filter-display-results\">\n	</div>\n	<div id=\"selected\">\n	</div>\n	<div id=\"close\">\n		<ul class=\"pagination\"><li class=\"active button\"><a href=\"#\" data-i18n=\"button-close\">Close</a></li><ul>\n	</div>\n	<div id=\"pagination-container\">\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "		<div id=\"filter-selection\">\n			<select class=\"btn btn-select-filter\" size=\"2\"></select>\n		</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"panel panel-default filter-panel squid_api_filters-categorical-panel-view\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0["panel-buttons"] : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["panel-buttons"] : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "			<div class=\"col-md-7\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.initialFacet : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<div id=\"search\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" id=\"searchbox\" type=\"search\" placeholder=\"Search for\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"fa fa-search\"></i>\n                    </span>\n                  </div>\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-7\">\n				<div id=\"filter-display-results\">\n				</div>\n			</div>\n			<div class=\"col-md-5\">\n				<div id=\"selected\">\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div id=\"pagination-container\">\n\n			</div>\n		</div>\n		<div class=\"row\">\n		<div class=\"col-md-4\">\n		</div>\n		<div class=\"col-md-8\">\n\n			</div>\n	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["panel-buttons"] : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\""
    + container.escapeExpression(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n		</button>\n	</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"row\">\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"row no-padding\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "					<div id=\"filter-selection\">\n						<select class=\"btn btn-select-filter\" size=\"2\"></select>\n					</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"panel-footer\">\n			<button type=\"button\" class=\"btn btn-primary apply-selection\" data-toggle=\"collapse\"\n				data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"	data-i18n=\"button-apply\">Apply</button>\n			<button type=\"button\" class=\"btn btn-default cancel-selection\" data-toggle=\"collapse\"\n				data-target=\""
    + alias4(((helper = (helper = helpers["data-target"] || (depth0 != null ? depth0["data-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data-target","hash":{},"data":data}) : helper)))
    + "\" data-clavier=\"true\"	data-i18n=\"button-close\">Close</button>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.popup : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_categorical_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <!-- display filter name and selection -->\r\n        <dt>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</dt>\r\n        <dd>\r\n        <select name=\""
    + alias4(((helper = (helper = helpers.facetId || (depth0 != null ? depth0.facetId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data}) : helper)))
    + "\" class=\"multiselect\" multiple=\"multiple\" id=\""
    + alias4(((helper = (helper = helpers.facetId || (depth0 != null ? depth0.facetId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data}) : helper)))
    + "\" size=\""
    + alias4(((helper = (helper = helpers.displaySize || (depth0 != null ? depth0.displaySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displaySize","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n        </dd>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                    "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n                </option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " selected";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <!-- just display filter name -->\r\n        <dt>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</dt>\r\n        <dd>-</dd>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selAvailable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_date_filter_selection_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n            </option>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-continous-selection-widget\">\r\n    <select class=\"sq-select form-control squid-api-filters-widgets-period-selector\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_date_range_selection_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.val || (depth0 != null ? depth0.val : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"val","hash":{},"data":data}) : helper)))
    + "\" class=\"select\" data-attr=\""
    + alias4(((helper = (helper = helpers.val || (depth0 != null ? depth0.val : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"val","hash":{},"data":data}) : helper)))
    + "\" data-i18n=\""
    + alias4(((helper = (helper = helpers.i18n || (depth0 != null ? depth0.i18n : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i18n","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-range-selection-widget\">\n    <select class=\"form-control\">\n        <option value='custom'>Custom</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ranges : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<span class=\"caret\"></span>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_date_selection_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<span class=\"widget\">"
    + container.escapeExpression(((helper = (helper = helpers.dateDisplay || (depth0 != null ? depth0.dateDisplay : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"dateDisplay","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dateCompareDisplay : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"compare\">\r\n			"
    + container.escapeExpression(((helper = (helper = helpers.dateCompareDisplay || (depth0 != null ? depth0.dateCompareDisplay : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dateCompareDisplay","hash":{},"data":data}) : helper)))
    + "\r\n		</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        no date available\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <button data-toggle=\"tooltip\" title=\"Click to refresh period boundaries\" class=\"form-control btn btn-default refresh-facet\"><i class=\"fa fa-refresh\"></i> <span>click to refresh</span></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"squid-api-date-selection-widget\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dateAvailable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notDone : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_my_selections"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "                <li class=\"list-group-item my-selection\" data-id=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.id : depth0)) != null ? stack1.myBookmarkSelectionId : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon glyphicon-edit selection-rename selection-view-control\" aria-hidden=\"true\"></span>\n                    <span class=\"my-selection-name selection-view-control\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n                    <span class=\"glyphicon glyphicon-trash selection-remove selection-view-control\" aria-hidden=\"true\"></span>\n                    <span class=\"glyphicon glyphicon-pencil selection-update selection-view-control\" aria-hidden=\"true\"></span>\n\n                    <span class=\"glyphicon glyphicon-ok selection-rename-ok selection-rename-control\" aria-hidden=\"true\" style=\"display:none;\"></span>\n                    <span class=\"glyphicon glyphicon-remove selection-rename-cancel selection-rename-control\" aria-hidden=\"true\" style=\"display:none;\"></span>\n                    <input class=\"my-selection-name-rename selection-rename-control\" type=\"text\" value=\""
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=\"display:none;\">\n                </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-content\" id=\"myselection-modal\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n        <h4 class=\"modal-title\" data-i18n=\"myselections_title\">My Selections</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"search input-group\" style=\"margin: 10px 0 10px 0\">\n            <span class=\"input-group-addon\">\n                <i id=\"selections-search-in-progress\" class=\"glyphicon glyphicon-refresh glyphicon-spin hidden\"></i>\n                <i id=\"selections-search-not-in-progress\" class=\"glyphicon glyphicon-search\"></i>\n            </span>\n            <input id=\"selections-searchbox\" class=\"form-control search\" data-i18n=\"[placeholder]filter_search\" value=\""
    + alias4(((helper = (helper = helpers.searchTerm || (depth0 != null ? depth0.searchTerm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchTerm","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" autofocus>\n        </div>\n        <div class=\"results min-filter-height filter-selections\">\n            <ul class=\"list-group\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.selections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-md-9\">\n                <input type=\"text\" id=\"new-selection\" class=\"form-control\" placeholder=\""
    + alias4(((helper = (helper = helpers.placeHolderNewName || (depth0 != null ? depth0.placeHolderNewName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeHolderNewName","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n            <div class=\"col-md-3\">\n                <button id=\"create-selection\" type=\"button\" class=\"btn btn-default\" data-i18n=\"button_create\" disabled>Create</button>\n            </div>\n        </div>\n        <div class=\"row\" style=\"margin-left: 15px;\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"row\" style=\"margin-left: 15px;color:crimson\">"
    + alias4(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"  data-i18n=\"button_cancel\">Cancel</button>\n    </div>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_filters_segment_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"checkbox\">\r\n    <label>"
    + container.escapeExpression(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <input type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n</div>";
},"useData":true});

this["squid_api"]["template"]["squid_api_FiltersSelector"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <label class=\"noData "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mandatory : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.noDataMessage || (depth0 != null ? depth0.noDataMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"noDataMessage","hash":{},"data":data}) : helper)))
    + "</label>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "warning fa fa-exclamation-circle";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <ul class=\"facets\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"facet\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.available : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                <div class=\"facet-name\">\n                    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <ul class=\"items\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " class=\"facet available\" ";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\">\n                        <div class=\"facet-value\">\n                            "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                        <div class=\"facet-remove\">\n                            <i class=\"glyphicon glyphicon-remove\"></i>\n                        </div>\n                    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"squid-api-FiltersSelector\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noData : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_selection_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"information\">All</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selection : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"item\" style=\"padding: 3px; display: inline-block;\">\n<table style=\"border:1px solid #DDD; border-collapse: separate; border-spacing: 3px;\">\n	<tr>\n		<td><span class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></td>\n		<td><a href=\"#\" id=\""
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"clear-filter\"><i class=\"glyphicon glyphicon-remove\"></i></a></td>\n	</tr>\n	<tr>\n		<td><span class=\"value\" style=\"color:#999;\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span></td>\n		<td></td>\n	</tr>\n</table>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"sq-selection-panel\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.facets : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
$.widget( "ui.dialog", $.ui.dialog, {
    options: {
        clickOutside: false, // Determine if clicking outside the dialog shall close it
        clickOutsideTrigger: "", // Element (id or class) that triggers the dialog opening
        parentContains: ".squid-api-action",
    },
    open: function() {
    var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
    var that = this;

    if (this.options.clickOutside){
      // Add document wide click handler for the current dialog namespace
      $(document).on( "click.ui.dialogClickOutside" + that.eventNamespace, function(event){
        if ( $(event.target).closest($(clickOutsideTriggerEl)).length === 0 && $(event.target).closest($(that.uiDialog)).length === 0){
          that.close();
        }
      });
    }

    this._super(); // Invoke parent open method
  },

  close: function() {
    var that = this;

    // Remove document wide click handler for the current dialog
    $(document).off( "click.ui.dialogClickOutside" + that.eventNamespace );

    this._super(); // Invoke parent close method
  }
});

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

            var html = this.template({
                "items" : updatedItems, "message" : message, "computingInProgress" : computingInProgress
            });

            // Trim spaces from Account Name id
            $.each(updatedItems, function(index, item){
                item.id = item.id.trim();
            });

            this.$el.html(html);
        }

    });

    return View;
}));

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
                    this.format = d3.timeFormat("%Y-%m-%d");
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
                        this.model.set("itemIndex", Math.max(pageIndex - nbPages, 0) * pageSize, {silent: true});
                        this.model.set("pageIndex", Math.max(pageIndex - nbPages, 0));
                	}
                    this.itemClicked = "prev";
                } else if (pageId == "next") {
                	if (this.model.get("facet").get("hasMore") === true) {
                        this.model.set("itemIndex", (pageIndex + nbPages) * pageSize, {silent: true});
                		this.model.set("pageIndex", pageIndex + nbPages);
                	}
                    this.itemClicked = "next";
                } else {
                    this.model.set("itemIndex", (pageId-1)*pageSize);
                }
            }
        },

        resetAndRender : function() {
        	if (this.model.hasChanged("facet")) {
        		var previousFacet = this.model.previousAttributes().facet;
        		if (previousFacet === null || previousFacet.get("id") !== this.model.get("facet").get("id")) {
        			this.model.set("itemIndex", 0, {silent: true});
        		}
        	}
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
(function (root, factory) {
    root.squid_api.view.CategoricalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        template : null,
        filterStore : null,
        format : null,
        initialFacet : null,
        singleSelect : null,
        facetList : null,
        avoidFacets : null,
        mandatory : null,
        

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.initialDimension) {
                this.initialDimension = options.initialDimension;
            }
            if (options.singleSelect) {
                options.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }
            if (options.mandatory) {
                this.mandatory = options.mandatory;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_filters_categorical_selected_view;
            }

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.timeFormat("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var itemId = $(event.currentTarget).parent("li").attr("attr-id");

                // Copy model selection object properties to remove object reference
                var selectionClone = $.extend(true, {}, this.model.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone.facets;
                    if (facets) {
                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, facetName, itemId);
                        // set config with updated selection
                        squid_api.setConfigSelection(selectionClone);
                    }
                }
                //squid_api.model.config.trigger("change:domain", squid_api.model.config);
            }
        },

        render : function() {
            var selFacets = [];
            var noData = true;
            if (this.model) {
                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        for (i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.dimension.type == "CATEGORICAL" || facet.dimension.type == "SEGMENTS") {
                                var selectedItems = facet.selectedItems || [];
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (this.initialFacet == facet.id || (!this.initialFacet && !this.initialDimension)) {
                                        noData = false;
                                        var obj = {};
                                        obj.facetItem = selectedItems[ix].value;
                                        obj.facetItemId = selectedItems[ix].id;
                                        if (facet.name) {
                                            obj.facetName = facet.name;
                                        } else {
                                            obj.facetName = facet.dimension.name;
                                        }
                                        obj.facetNameId = facet.id;
                                        selFacets.push(obj);
                                    }
                                }
                            }
                        }
                    }
                    if (this.facetList) {
                        var updatedFacets = [];
                        for (i=0; i<selFacets.length; i++) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === selFacets[i].facetNameId) {
                                    updatedFacets.push(selFacets[i]);
                                }
                            }
                        }
                        if (updatedFacets.length === 0) {
                            noData = true;
                        } else {
                            selFacets = updatedFacets;
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<selFacets.length; ix++) {
                                if (this.avoidFacets[i] === selFacets[ix].facetNameId) {
                                    selFacets.splice(ix, 1);
                                }
                            }
                        }
                    }
                }
            }

            this.$el.html(this.template({facets: selFacets, noData: noData, noDataMessage: this.noDataMessage, mandatory: this.mandatory}));
        }
    });

    return View;
}));

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
                    this.format = d3.timeFormat("%Y-%m-%d");
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
                onChange: function(option) {
                    var filterValue = $(option).val();
                    me.filterStore.set("selectedFilter", filterValue);
                }
            });

        },

        renderSelection : function() {
            var me = this;

            if (this.model.get("selection")) {
                var selectedFilter = me.filterStore.get("selectedFilter");
                var facets = this.model.get("selection").facets;
                var items = [];
                if (this.model.get("selection")) {
                    if (facets) {
                        for (i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                                var selected = false;
                                if (facet.id == selectedFilter) {
                                    selected = true;
                                }
                                var json = {
                                    label : facet.name,
                                    title : facet.name,
                                    value : facet.id,
                                    selected : selected
                                };
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
                }
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        currentModel : null,
        format : null,
        panelButtons : true,
        filterPanel : null,
        filterSelected : null,
        filterSelectedTemplate : null,
        nbPages : 10,
        buttonLabel : null,
        noFiltersMessage : "No Filter Selected",
        initialFacet : null,
        initialDimension : null,
        facetList : null,
        singleSelect : null,
        parentCheck : null,
        ignoredFacets : null,
        mandatory : null,
        popup : false,
        onChange : null,
        displayFacetQuantity : false,
        hoverFacetDisplay : null,
        facetViewOnly : null,
        template: null,
        facetViewTemplate: null,
        keyupCount:0,

        initialize : function(options) {
            var me = this;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            // force using the non-blocking engine
            this.model.set("engineVersion", "2");
            if (options.filterPanel) {
                this.filterPanel = options.filterPanel;
            } else {
                // create an element to hold the filterPanel
                this.filterPanel = 'squid_api-view-CategoricalView';
                $("body").append("<div id='"+this.filterPanel+"'></div>");
                this.filterPanel = "#"+this.filterPanel;
            }
            if (options.filterSelected) {
                this.filterSelected = options.filterSelected;
            }
            if (options.filterSelectedTemplate){
                this.filterSelectedTemplate = options.filterSelectedTemplate;
            }
            if (! options.panelButtons) {
                this.panelButtons = options.panelButtons;
            }
            if (options.facetViewOnly) {
                this.facetViewOnly = options.facetViewOnly;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.initialDimension) {
                this.initialDimension = options.initialDimension;
            }
            if (options.facetViewTemplate) {
                this.facetViewTemplate = options.facetViewTemplate;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.ignoredFacets) {
                this.ignoredFacets = options.ignoredFacets;
            }
            if (options.parentCheck) {
                this.parentCheck = options.parentCheck;
            }
            if (options.mandatory) {
                this.mandatory = options.mandatory;
            }
            if (options.popup) {
                this.popup = options.popup;
            }
            if (options.displayFacetQuantity) {
                this.displayFacetQuantity = options.displayFacetQuantity;
            }
            if (options.hoverFacetDisplay) {
                this.hoverFacetDisplay = options.hoverFacetDisplay;
            }
            if (options.onChange) {
                this.onChange = options.onChange;
            }
            if (options.template) {
                this.template = options.template;
            }
            if (options.status) {
                this.status = options.status;
            } else {
                this.status = squid_api.model.status;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_view;
            this.filterHoverTemplate = squid_api.template.squid_api_filters_categorical_view_hover_template;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.timeFormat("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.filterStore = new Backbone.Model( {
                // selected dimension
                selectedFilter : me.initialFacet,
                // current selected page
                pageIndex : 0,
                // nb of items in a page
                pageSize : 10,
                // nb of pages to display
                nbPages : 10,
                // current facet retrieved from API
                facet : null,
                // index id of the first item of facet
                itemIndex : 0,
                // previous search query
                searchPrevious : null,
                // current search query
                search : null
            }
            );

            squid_api.model.config.on("change:domain", function() {
                // reset
                me.initialFacet = null;
                me.filterStore.set({
                    "selectedFilter" : null,
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                me.setCurrentModel();
            }, this);

            this.model.on("change:selection", function(filters) {
                // Display label of Button which opens filter panel
                if (me.initialFacet) {
                   var name = me.getButtonLabel();
                   if (name) {
                       me.$el.find(".squid_api_filters_categorical_button").html(name + "<span class='caret'></span>");
                   }
                } else {
                    // search Facet By DimensionId = function(selection, dimensionId) {
                    var dimensionId = me.initialDimension;
                    if (dimensionId) {
                        var facetId;
                        var facets = filters.get("selection").facets;
                        for (var i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id.lastIndexOf(dimensionId) === (facet.id.length - dimensionId.length - 1)) {
                                facetId = facet.id;
                                break;
                            }
                        }
                        me.setInitialFacet(facetId);
                    }
                }
                if (!me.currentModel) {
                    me.setCurrentModel();
                }
                if (me.currentModel !== me.model) {
                    var selectionClone = $.extend(true, {}, filters.get("selection"));
                    me.currentModel.set("selection", selectionClone, {silent: true});
                }
                if (me.displayFacetQuantity) {
                    me.updateFacetQuantityDisplay();
                }
            });

            this.filterStore.on("change:selectedFilter", function() {
                me.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                // reset the search box
                $(me.filterPanel).find("#searchbox").val("");
                // re-compute the filters
                squid_api.controller.facetjob.compute(me.currentModel);

            }, this);

            this.filterStore.on("change:search", function() {
                me.filterStore.set({"pageIndex": 0}, {"silent" : true});
                me.filterStore.trigger("change:pageIndex", me.filterStore);
            }, this);

            this.filterStore.on("change:pageIndex", function() {
                me.renderFacet(false);
            }, this);

            // listen for global status change
            this.status.on('change:status', this.statusUpdate, this);

            this.render();
        },

        setInitialFacet : function(initialFacet) {
            this.initialFacet = initialFacet;
            this.filterStore.set({
                "selectedFilter": initialFacet,
                "searchPrevious" : null,
                "search" : null,
                "facet" : null,
                "pageIndex" : 0,
                "itemIndex" : 0
            }, {
                "silent" : true
            });
            // reset the search box
            $(this.filterPanel).find("#searchbox").val("");
            this.render();
        },

        setIgnoredFacets : function(ignoredFacets) {
            this.ignoredFacets = ignoredFacets;
            this.render();
        },

        statusUpdate : function() {
            var running = (this.status.get("status") != this.status.STATUS_DONE);
            var disabled = null;

            if (this.parentCheck && this.currentModel.get("selection")) {
                var facetId = this.filterStore.get("selectedFilter");
                var currentModel = this.currentModel.get("selection").facets;
                var dimensionId;

                // Get Dimension ID of linked parent
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].id === facetId) && (currentModel[i].dimension.parentId)) {
                        dimensionId = currentModel[i].dimension.parentId.dimensionId;
                    }
                }
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].dimension.id.dimensionId === dimensionId) && (currentModel[i].selectedItems.length === 0)) {
                        disabled = true;
                    }
                }
            }


            if ((running) || (disabled)) {
                // computation is running : disable input
                this.$el.find("button").attr("disabled", true);
            } else {
                // computation is done : enable input
                this.$el.find("button").attr("disabled", false);
            }
        },

        setCurrentModel : function() {
            var me = this;
            if (this.panelButtons) {
                // duplicate the filters model
                this.currentModel = new squid_api.model.FiltersJob();
                var attributesClone = $.extend(true, {}, this.model.attributes);
                this.currentModel.set(attributesClone);
                this.listenTo(this.currentModel, 'change', function() {
                    // force facet fetch (because the selection has changed)
                    me.renderFacet(true);
                });
            } else {
                if (this.currentModel !== this.model) {
                    this.currentModel = this.model;
                    this.listenTo(this.currentModel, 'change', function() {

                        // force facet fetch (because the selection has changed)
                    	// Do not relaunch a facet job when few attributes changed, no need & it generate extra calls
                        me.renderFacet(me.currentModel.hasChanged("statistics") === false && me.currentModel.hasChanged("id") === false && me.currentModel.hasChanged("oid") === false && me.currentModel.hasChanged("status") === false);
                    });
                }
            }
            this.render();
        },

        search : function(event) {
            var me = this;
            me.keyupCount++;
            setTimeout(function(){
                me.keyupCount--;
                // trigger the action only if this is the latest keyup
                if (me.keyupCount === 0) {
                    me.filterStore.set("search", event.target.value);
                }
            }, 200);
        },

        getButtonLabel : function() {
            // Button which opens filter Panel
            var buttonLabel = this.buttonLabel;
            if (!buttonLabel) {
                var selection = this.model.get("selection");
                if (this.initialFacet && selection) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === this.initialFacet) {
                            buttonLabel = facets[i].name;
                        }
                    }
                } else {
                    buttonLabel = "Filters";
                }
            }
            return buttonLabel;
        },

        render : function() {
            // Button which opens filter Panel
            var buttonLabel = this.getButtonLabel();

            if (this.facetViewOnly) {
                this.$el.html(this.template());
                var facetItems = new squid_api.view.CategoricalFacetView({
                    el: $(this.el).find(".results"),
                    model: this.filterStore,
                    template: this.facetViewTemplate,
                    filters: this.currentModel,
                    noFiltersMessage : this.noFiltersMessage,
                    singleSelect : this.singleSelect,
                    onChange : this.onChange
                });
                var paginationView = new squid_api.view.CategoricalPagingView({
                    el: $(this.el).find(".pagination-container"),
                    model: this.filterStore
                });
            } else {
                // Print Base Filter Panel Layout
                this.keyupCount = 0;
                $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel").html(this.filterPanelTemplate({
                    "popup" : this.popup,
                    "data-target" : this.filterPanel,
                    "panel-buttons" : this.panelButtons,
                    "initialFacet" : this.initialFacet
                }));

                view = new squid_api.view.CategoricalSelectorView({
                    el: $(this.filterPanel).find("#filter-selection"),
                    model: this.currentModel,
                    filterStore : this.filterStore,
                    facetList : this.facetList,
                    avoidFacets : this.ignoredFacets
                });

                view2 = new squid_api.view.CategoricalFacetView({
                    el: $(this.filterPanel).find("#filter-display-results"),
                    model: this.filterStore,
                    template: this.facetViewTemplate,
                    filters: this.currentModel,
                    noFiltersMessage : this.noFiltersMessage,
                    singleSelect : this.singleSelect,
                    onChange : this.onChange
                });

                view3 = new squid_api.view.CategoricalPagingView({
                    el: $(this.filterPanel).find("#pagination-container"),
                    model: this.filterStore
                });

                if (this.panelButtons) {
                    view4 = new squid_api.view.CategoricalSelectedView({
                        el: $(this.filterPanel).find("#selected"),
                        model: this.currentModel,
                        template: this.filterSelectedTemplate,
                        noDataMessage: this.noFiltersMessage,
                        initialFacet : this.initialFacet,
                        initialDimension : this.initialDimension,
                        facetList : this.facetList,
                        avoidFacets : this.ignoredFacets,
                        mandatory : this.mandatory
                    });
                }

                view5 = new squid_api.view.CategoricalSelectedView({
                    el: this.filterSelected,
                    model: this.model,
                    template: this.filterSelectedTemplate,
                    noDataMessage: this.noFiltersMessage,
                    initialFacet : this.initialFacet,
                    initialDimension : this.initialDimension,
                    facetList : this.facetList,
                    avoidFacets : this.ignoredFacets,
                    mandatory : this.mandatory
                });

                var me = this;
                if (this.panelButtons) {
                    $(this.filterPanel).find(".apply-selection").click(function() {
                        me.applySelection();
                    });
                    $(this.filterPanel).find(".cancel-selection").click(function() {
                        me.cancelSelection();
                    });
                }

				//T2726: must put back the call back to launch a search on keyeup
                //This has been removed at a point, for an unknown reason
                $(this.filterPanel).find("#searchbox").keyup(_.bind(this.search, this));

                $(this.filterPanel).find("li.button").on("click", function() {
                    if ($(me.filterPanel).dialog("isOpen")) {
                        $(me.filterPanel).dialog( "close" );
                    } else {
                        $(me.filterPanel).dialog( "open" );
                    }
                });

				if (this.popup) {
                    if (buttonLabel) {
                        this.$el
                            .html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button'>" + buttonLabel + "<span class='caret'></span></button>");
                        this.statusUpdate();
                    }
                    $(this.filterPanel).dialog({
                        dialogClass: "squid-api-filters-widget-popup",
                        autoOpen: false,
                        position: {
                            my: "left top", at: "left bottom", of: this.$el.find("button")
                        },
                        clickOutside: true, // clicking outside the dialog will close it
                        clickOutsideTrigger: this.$el.find("button"), // Element (id or class) that triggers the dialog opening
                    });
                    // Click Event for filter panel button
                    this.$el.find("button").off("click").on("click", function() {
                        if ($(me.filterPanel).dialog("isOpen")) {
                            $(me.filterPanel).dialog( "close" );
                        } else {
                            $(me.filterPanel).dialog( "open" );
                        }
                    });
                } else {
                    if (buttonLabel) {
                        this.$el
                            .html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + buttonLabel + "</span><span class='caret'></span></button>");
                    }
                    $(this.filterPanel).addClass("collapse");
                }
                if (this.hoverFacetDisplay) {
                    this.displayFacetsOnHover();
                }
            }
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }

        },

        displayFacetsOnHover: function() {
            var selection = this.model.get("selection");
            var jsonData = {items : []};
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // Button which opens filter Panel
                    var buttonLabel = this.getButtonLabel();
                    // loop through selected model facets
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].selectedItems.length > 0) {
                            var facet = facets[i];
                            // do not add to the count if a date
                            if (facet.dimension.type !== "CONTINUOUS" && facet.dimension.valueType !== "DATE") {
                                var selectedItems = facet.selectedItems;
                                // store local object
                                var obj = {};
                                obj.name = facet.name;
                                obj.values = [];
                                // obtain all selected items
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    obj.values.push(selectedItems[ix].value);
                                }
                                // push to jsonData
                                jsonData.items.push(obj);
                            }
                        }
                    }
                }
            }
            if (jsonData.items.length !== 0) {
                var el = this.$el.find(".squid_api_filters_categorical_button");
                el.attr("data-original-title", this.filterHoverTemplate(jsonData));
                el.attr("data-placement", "bottom");
                el.tooltip({
                    html:true,
                    template: '<div class="tooltip squid_api_filters_categorical_button_hover_wrapper"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                });
            }
        },

        updateFacetQuantityDisplay: function() {
            var selection = this.model.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // Button which opens filter Panel
                    var buttonLabel = this.getButtonLabel();
                    // store number of selected facets items
                    var count = 0;
                    // loop through selected model facets
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].selectedItems.length > 0) {
                            // do not add to the count if a date
                            if (facets[i].dimension.type !== "CONTINUOUS" && facets[i].dimension.valueType !== "DATE") {
                                count += facets[i].selectedItems.length;
                            }
                        }
                    }
                    if (this.popup) {
                        if (buttonLabel) {
                            this.$el.html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button'>" + buttonLabel + " (" + count + ")<span class='caret'></span></button>");
                        }
                    } else {
                        this.$el.html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + buttonLabel + " (" + count + ")</span><span class='caret'></span></button>");
                    }
                    if (this.hoverFacetDisplay) {
                        this.displayFacetsOnHover();
                    }
                }
            }
        },

        events: {
            "keyup" : function(event) {
                this.search(event);
            },
            "click .squid_api_filters_categorical_button": function(item) {
                var className = 'opened';

                // Rotate Caret Position
                if (! this.popup) {
                    if ($(item.currentTarget).hasClass(className)) {
                        $(item.currentTarget).removeClass(className);
                    } else {
                        $(item.currentTarget).addClass(className);
                    }
                }

                /**
                    With each categorical view being independent, obtain all
                    filter panels which don't matched the one being clicked
                    & is currently open. Once identified, close it.
                **/

                var dataTarget = $(item.currentTarget).attr('data-target');
                var filterPanels = $('.squid_api_filters_categorical_filter_panel');
                var buttons = $('.squid_api_filters_categorical_button');

                for (i=0; i<filterPanels.length; i++) {
                    if ($(filterPanels[i]).hasClass('in') && ("#" + $(filterPanels[i]).attr('id')) !== dataTarget) {
                        var filterId = $(filterPanels[i]).attr('id');

                        // Close Panel
                        $(filterPanels[i]).removeClass('in');

                        // Remove Opened Class on Buttons
                        var target = $(filterPanels[i]).attr('id');

                        for (ix=0; ix<buttons.length; ix++) {
                            if ($(buttons[ix]).attr('data-target') === '#' + target) {
                                $(buttons[ix]).removeClass(className);
                            }
                        }
                    }
                }
            }
         },

        /**
         * Render a facet.
         * Facet fetch may be triggered if true is passed as the fetch arg or if the requested paging index
         * requires more elements to be fetched.
         */
        renderFacet : function(fetch) {
            var me = this;
            if (this.currentModel.get("selection")) {
                var selectedFacetId = this.filterStore.get("selectedFilter");
                var pageIndex = this.filterStore.get("pageIndex");
                var pageSize = this.filterStore.get("pageSize");
                var facet = this.filterStore.get("facet");
                var nbPages = this.filterStore.get("nbPages");

                // compute required index range
                var startIndex = pageIndex * pageSize;
                var endIndex = startIndex + (pageSize *nbPages);

                // check if we need to fetch more items
                var searchStale =  false;
                var searchPrevious = this.filterStore.get("searchPrevious");
                var search = this.filterStore.get("search");
                if ((search !== null) && (search != searchPrevious)) {
                    searchStale = true;
                }
                if ((facet) && (facet.get("id") == selectedFacetId) && (!searchStale)) {
                    var itemIndex = this.filterStore.get("itemIndex");
                    if (facet.getParameter("startIndex")>=0) {
                    	itemIndex = facet.getParameter("startIndex");
                    }
                    // compute what's the max index
                    var maxItem = itemIndex + facet.get("items").length;
                    if (startIndex < itemIndex) {
                        fetch = true;
                    }
                    if ((endIndex > maxItem) && (facet.get("hasMore") === true)) {
                        fetch = true;
                    }
                } else if (facet === null || searchStale) {
                	//Launch facet once only, it was done 4 times elswhere
                    fetch = true;
                } else {
                    fetch = false;
                }

                if ((fetch === true) && (selectedFacetId) && (this.currentModel.get("id").facetJobId)) {
                    // pre-fetch some pages of facet members
                    var facetJob = new squid_api.model.ProjectFacetJobFacet();
                    facetJob.set("id",this.currentModel.get("id"));
                    facetJob.set("oid", selectedFacetId);
                    if (startIndex) {
                        facetJob.addParameter("startIndex", startIndex);
                    }
                    if (pageSize) {
                        facetJob.addParameter("maxResults", (nbPages * pageSize));
                    }
                    if (search) {
                        facetJob.addParameter("filter", search);
                    }
                    //always update searchPrevious even with null so text box ctrl+X is properly handled
                    this.filterStore.set("searchPrevious", search);
                    // get the results from API
                    this.facetJobFetch(facetJob, startIndex);
                } else {
                   // trigger facet render
                   // T2778 remove this call it looks duplicating rendering
                   // me.filterStore.trigger("change:facet");
                }
            }
        },

        setFakeFacet: function() {
            // set a fake facet (to obtain model data)
            var f = new squid_api.model.ProjectFacetJobFacet();
            f.set("items", []);
            this.filterStore.set("facet", f);
        },

        facetJobFetch: function(facetJob, startIndex) {
            var me = this;
            var facetJobId = facetJob.get("oid");
            var selectedFilter = this.filterStore.get("selectedFilter");
            var selectedFacet = this.filterStore.get("facet");
            var itemIndex = this.filterStore.get("itemIndex");
            var refresh = false;
            if (this.filterStore.hasChanged("pageIndex") ||
                this.filterStore.hasChanged("oid") ||
                //this.filterStore.hasChanged("oid") || // Duplicate condition. Meaning something else?
                this.filterStore.hasChanged("search") ||
                (this.filterStore.get("searchPrevious") === null && this.filterStore.get("search") === null) ||
                this.filterStore.get("search")) { // GMS-11179: It seems that, when searching refresh is always needed
            	refresh = true;
            }
            if (itemIndex >= this.filterStore.get("pageIndex") * this.filterStore.get("pageSize")) {
                if (itemIndex < (this.filterStore.get("pageIndex")+this.filterStore.get("nbPages")) * this.filterStore.get("pageSize")) {
                	startIndex = itemIndex;
                }
            }
            if (facetJobId === selectedFilter) {
                if (! selectedFacet) {
                    // due to timeOut for the success handler
                    this.setFakeFacet();
                }
                var searchInProgess = this.$el.find("#search-in-progress");
                var searchNotInProgess = this.$el.find("#search-not-in-progress");
                searchInProgess.removeClass("hidden");
                searchNotInProgess.addClass("hidden");
                facetJob.fetch({
                    error: function(model, response) {
                        console.error(response);
                        searchInProgess.addClass("hidden");
                        searchNotInProgess.removeClass("hidden");
                    },
                    success: function(model, response) {
                        if (me.filterStore.get("selectedFilter") === model.get("oid")) {
                            // make sure this request matches the current search
                            if ((!model.has("filter") && (me.filterStore.get("search") === "" || me.filterStore.get("search") === null)) || (me.filterStore.get("search") === model.get("filter"))) {
                                if ((model.get("apiError") && (model.get("apiError") == "COMPUTING_IN_PROGRESS")) || model.get("done") === false) {
                                    if (model.get("done") === true) {
                                        me.filterStore.set("facet", model);
                                        me.filterStore.trigger("change:facet");
                                    } else {
                                        if (model.get("done") === false) {
                                            me.filterStore.set("facet", model);
                                            me.filterStore.trigger("change:facet");
                                        }
                                        // reset currentModel ID
                                        facetJob.set("id",me.currentModel.get("id"));
                                        // retry every 20 seconds
                                        setTimeout(function () {
                                            me.facetJobFetch(facetJob, startIndex);
                                        }, 20000);
                                    }
                                } else {
                                	if (refresh) {
                                		me.filterStore.set("itemIndex", startIndex);
                                		me.filterStore.set("facet", model);
	                                }
                                }
                                // set error message if exists
                                var errorMessage = model.get("errorMessage");
                                if (model.get("error")) {
                                    if (errorMessage) {
                                        squid_api.model.status.set("message", errorMessage);
                                    }
                                }
                                // manually trigger if previously set
                                searchInProgess.addClass("hidden");
                                searchNotInProgess.removeClass("hidden");
                            }
                        }
                    }
                });
            }
        },

        applySelection : function() {
            var selectionClone = $.extend(true, {}, this.currentModel.get("selection"));
            this.model.set("selection", selectionClone);
        },

        cancelSelection : function() {

        },

        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }

    });

    return View;
}));

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.CategoricalFilterView = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        parent : null,
        template : squid_api.template.squid_api_filters_categorical_widget,

        initialize : function() {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.parent) {
                    this.parent.changeSelection(this);
                }
            }
        },

        getSelectedItems: function() {
            var selectedItems = [];
            var val = this.$el.find("select").val();
            var values = [];
            if (!val) {
                // ignore
            } else if (val instanceof Array === false) {
                values.push(val);
            } else {
                values = val;
            }
            for (var i=0; i<values.length; i++) {
                var v = values[i];
                if (v !== '') {
                    selectedItems.push({
                        "id": v,
                        "value": v,
                        "type": "v"
                    });
                }
            }
            return selectedItems;
        },

        render : function() {
            var selHTML = null;
            if (this.model && this.model.get('dimension')) {
                var items = this.model.get('items');
                var selItems = this.model.get('selectedItems');
                var name = this.model.get('name');
                var facetId = this.model.get('facetId');

                var selAvailable = false;
                var options = [];
                if (items && items.length > 0) {
                    // set flag to indicate the filter selection is available
                    selAvailable = true;
                    // build select box options
                    var selected;
                    var selItemsLen = selItems.length;
                    for (var j = 0; j < items.length; j++) {
                        selected = false;
                        for (var k = 0; k < selItemsLen; k++) {
                            if (items[j].id == selItems[k].id) { // option is selected
                                selected = true;
                                break;
                            }
                        }
                        options.push({"value" : items[j].id, "label" : items[j].value, "selected" : selected});
                    }
                }
                var displaySize = options.length>10?10:options.length;
                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "selAvailable" : selAvailable,
                    "facetId" : facetId,
                    "name" : name,
                    "options" : options,
                    "displaySize" : displaySize
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            return this;
        },

        setEnable: function(enable) {
            var selection = this.$el.find("select");
            if (selection) {
                $(selection).attr('disabled', !enable);
            }
        }

    });

    return View;
}));
(function (root, factory) {
    root.squid_api.view.DateFilterSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_filter_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.filters = squid_api.model.filters;
            this.status = squid_api.model.status;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.filters, "change:selection", this.render);

            // listen for global status change
            this.status.on('change:status', this.statusUpdate, this);

            this.renderView();
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        statusUpdate: function() {
        	if (this.status.get("status") !== "DONE") {
        		this.$el.find("button").prop("disabled", true);
        	} else {
        		this.$el.find("button").prop("disabled", false);
        	}
        },

        renderView: function(jsonData) {
            var me = this;
            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            this.$el.find("select").multiselect({
                buttonText: function(option, select) {
                    if (select.find("option:selected").length > 0) {
                        text = select.find("option:selected").text();
                    } else if (select.find("option").length > 0) {
                        text = "Select a period";
                    } else {
                        text = 'No usable period exists';
                    }
                    return text;
                },
                onChange: function(facet) {
                    var period = _.clone(me.config.get("period"));
                    var domain = me.config.get("domain");
                    period[domain] = facet.val();
                    var selection = me.getPeriodSelection(period);
                    me.config.set({"period": period, "selection" : selection});
                }
            });

            // Remove Button Title Tag
            this.$el.find("button").removeAttr('title');

            this.statusUpdate();
        },

        render: function() {
            var me = this;
            var domain = this.config.get("domain");
            var periodConfig = this.config.get("period");
            var jsonData = {"options" : []};
            // iterate through all filter facets
            var selection = me.filters.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var period = me.config.get("period");
                    for (var dimIdx=0; dimIdx<facets.length; dimIdx++) {
                        var facet = facets[dimIdx];
                        if (facet.dimension.valueType == "DATE" && facet.dimension.type === "CONTINUOUS" && ! facet.error) {
                            var option = {"label" : facet.name, "value" : facet.id, "error" : facets[dimIdx].error, "selected" : false};
                            // if currently selected within config
                            if (periodConfig) {
                                if (periodConfig[domain] == facet.id) {
                                    option.selected = true;
                                }
                            }
                            jsonData.options.push(option);
                        }
                    }
                }
            }

            // Alphabetical Sorting
            jsonData.options.sort(function(a, b) {
                var labelA=a.label.toLowerCase(), labelB=b.label.toLowerCase();
                if (labelA < labelB)
                    return -1;
                if (labelA > labelB)
                    return 1;
                return 0; // no sorting
            });

            this.renderView(jsonData);

            return this;
        },
        
        /**  
         * responsible for removing a previously active date facet from the selection.
         */
        getPeriodSelection: function(period) {
            var selection = $.extend(true, {}, this.config.get("selection"));
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var changed = false;
                    var domain = this.config.get("domain");
                    for (var i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        if (facet.dimension.valueType === "DATE") {
                            if (facet.id !== period[domain]) {
                                changed = true;
                                facets.splice(i, 1);
                            }
                        }
                    }
                    selection.facets = facets;
                }
            }
            return selection;
        },
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DateRangeSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_range_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        facetsAttribute : "facets",
        model: null,
        monthsOnlyDisplay : false,
        ranges: [
            {
                name : "All",
                lowerExpression : "=$'MIN'",
                upperExpression : "=$'MAX'"
            },
            {
                name : "First Month",
                lowerExpression : "=$'MIN'",
                upperExpression : "=DATE_ADD($'MIN', 1 ,\"MONTH\")"
            },
            {
                name : "Last Month",
                lowerExpression : "=DATE_SUB($'MAX', 1 ,\"MONTH\")",
                upperExpression : "=$'MAX'"
            }
        ],

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.ranges) {
                    this.ranges = options.ranges;
                }
                if (options.facetsAttribute) {
                    this.facetsAttribute = options.facetsAttribute;
                }
            }

            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.config, "change:selection", this.render);
            this.render();
        },

        changeEvent: function(e) {
            var val = $(e.target).attr("data-attr") || $(e.target).val();
            var ranges = this.jsonData.ranges;
            for (i=0; i<ranges.length; i++) {
                if (ranges[i].val === val) {
                    this.updateSelection(ranges[i].lowerExpression, ranges[i].upperExpression);
                }
            }

            var filtersSelection = this.filters.get("selection");
            if (val === "custom") {
                if (filtersSelection) {
                    var facets = filtersSelection[this.facetsAttribute];
                    if (facets) {
                        for (ix=0; ix<facets.length; ix++) {
                            if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].selectedItems.length > 0 && facets[ix].selectedItems[0].lowerBound) {
                                if (facets[ix].selectedItems.length > 0) {
                                    this.updateSelection(facets[ix].selectedItems[0].lowerBound, facets[ix].selectedItems[0].upperBound);
                                }
                            }
                        }
                    }
                }
            }
        },

        events: {
            "change select" : function(e) {
                this.changeEvent(e);
            },
            "click .select" : function(e) {
                this.changeEvent(e);
            }
        },

        updateSelection: function(lowerExpression, upperExpression) {
            // set the period facet
            var period = this.config.get("period");
            if (period) {
                var periodId = period[this.config.get("domain")];
                var selectionClone = $.extend(true, {}, this.config.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone[this.facetsAttribute];
                    if ((!facets || (facets && facets.length === 0)) && (this.facetsAttribute !== "facets")) {
                        // init the period facets (case of compareTo empty)
                        facets = [];
                        for (var i1=0; i1<selectionClone.facets.length; i1++) {
                            if (selectionClone.facets[i1].id === periodId) {
                                facets.push($.extend(true, {}, selectionClone.facets[i1]));
                                break;
                            }
                        }
                    }

                    if (facets) {
                        if (lowerExpression && upperExpression) {
                            for (var i=0; i<facets.length; i++) {
                                if (facets[i].id === periodId) {
                                    facets[i].selectedItems[0].lowerBound = lowerExpression;
                                    facets[i].selectedItems[0].upperBound = upperExpression;
                                }
                            }

                        } else {
                            facets = null;
                        }
                        selectionClone[this.facetsAttribute] = facets;
                    }
                }

                // set config selection
                this.config.set("selection", selectionClone);
            } else {
                console.error("No period found in config");
            }
        },

        statusUpdate: function() {
            if (this.status.get("status") === "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },
        currentlySelected: function(range) {
            var selection = this.config.get("selection");
            var selected = false;
            if (selection) {
                var facets = selection[this.facetsAttribute];
                if (facets) {
                    for (ix=0; ix<facets.length; ix++) {
                        if (!facets[ix]) {
                            continue;
                        }
                        if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].selectedItems.length > 0 && facets[ix].selectedItems[0].lowerBound) {
                            if (facets[ix].selectedItems[0].lowerBound === range.lowerExpression && facets[ix].selectedItems[0].upperBound === range.upperExpression) {
                                selected = true;
                                break;
                            }
                        }
                    }
                }
            }
            return selected;
        },

        disableSelector: function() {
            if (this.$el.find(".disabled").length > 0) {
                this.$el.find(".disabled").show();
            } else {
                this.$el.find("select").attr("disabled", true);
            }
        },

        render: function() {
            var selection = this.config.get("selection");
            var domain = this.config.get("domain");
            var period = this.config.get("period");

            var range;
            this.jsonData = {
                ranges : []
            };

            // construct data
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                range.selected = this.currentlySelected(range);
                if (typeof range.val === "undefined") {
                	range.val = range.name.replace(" ", "-");
                }
                if (typeof range.i18n === "undefined") {
                	range.i18n = range.name;
                } else
                this.jsonData.ranges.push(range);
            }

            // render html
            var html = this.template(this.jsonData);
            this.$el.html(html);

            if (! period || ! period[domain]) {
                this.disableSelector();
            }

            // detect currently selected expression range
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                if (this.currentlySelected(range) === true) {
                    this.$el.find("select").val(range.val);
                }
            }
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }
            return this;
        }
    });

    return View;
}));

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
                endDate: dates.currentEndDate ? dates.currentEndDate.format('YYYY-MM-DD') : null,
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
            this.data.placeHolderSearch="Search";
            if (typeof $.i18n !== "undefined") {
            	this.data.placeHolderSearch=$.i18n.t("filter_search");
            	this.data.placeHolderNewName=$.i18n.t("myselections_new_name");
            } else {
            	this.data.placeHolderSearch="Search";
            	this.data.placeHolderNewName="Selection's Name";
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
                url: this.getSelectionsUrl() + "/" + myBookmarkSelectionId + "?access_token=" + squid_api.model.login.get("accessToken"),
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
                if (typeof $.i18n !== "undefined") {
                	me.finishRequest($.i18n.t("myselections_success_update", {"name": name}),"");
                } else {
                	me.finishRequest("Selection '" + name + "' updated", "");
                }
            }).fail(function() {
                if (typeof $.i18n !== "undefined") {
                	me.finishRequest($.i18n.t("myselections_error_update", {"name": name}));
                } else {
                    me.finishRequest("", "Failed to update '" + name + "'!");
                }
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
                        url: this.getSelectionsUrl() + "?access_token=" + squid_api.model.login.get("accessToken"),
                        method: "POST",
                        contentType: "text/json",
                        data: JSON.stringify(newSelection),
                        headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}
                    }).done(function(newSelection) {
                        me.data.selections.push(newSelection);
                        if (typeof $.i18n !== "undefined") {
                        	me.finishRequest($.i18n.t("myselections_success_create", {"name": name}),"");
                        } else {
                        	me.finishRequest("Selection '" + name + "' created", "");
                        }
                    }).fail(function() {
                        if (typeof $.i18n !== "undefined") {
                        	me.finishRequest("",$.i18n.t("myselections_error_create", {"name": name}));
                        } else {
                            me.finishRequest("", "Failed to add the selection '" + name + "'!");
                        }
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
                var confirmUpdateMsg = "Are you sure you want to update '" + name + "' with the current selection?";
                if (typeof $.i18n !== "undefined") {
                	confirmUpdateMsg = $.i18n.t("myselections_confirm_update", {"name": name});
                }
                if (confirm(confirmUpdateMsg)) {
                    $(event.target).parent().find(".selection-rename-control").hide();
                    $(event.target).parent().find(".selection-rename-control").show();

                    var myBookmarkSelectionId = $(event.target).parent().data("id");

                    this.updateSelection(myBookmarkSelectionId, name, squid_api.model.config.attributes.selection);
                }
            },

            "click .selection-remove" : function(event) {
                var name = $(event.target).parent().find(".my-selection-name ").text();
                var confirmDeleteMsg = "Are you sure you want to delete '" + name + "'?";
                if (typeof $.i18n !== "undefined") {
                	confirmDeleteMsg = $.i18n.t("myselections_confirm_delete", {"name": name});
                }
                if (confirm(confirmDeleteMsg)) {
                    var me = this;
                    var myBookmarkSelectionId = $(event.target).parent().data("id");

                    this.startRequest();

                    $.ajax({
                        url: this.getSelectionsUrl() + "/" + myBookmarkSelectionId + "?access_token=" + squid_api.model.login.get("accessToken"),
                        method: "DELETE",
                        headers: {"Authorization" : "Bearer " + squid_api.model.login.get("accessToken")}
                    }).done(function() {
                        me.data.selections = $.grep(me.data.selections, function(elem) {
                            return elem.id.myBookmarkSelectionId !== myBookmarkSelectionId;
                        });
                        if (typeof $.i18n !== "undefined") {
                        	me.finishRequest($.i18n.t("myselections_success_delete", {"name": name}),"");
                        } else {
                        	me.finishRequest("Selection '" + name + "' deleted", "");
                        }
                    }).fail(function() {
                        if (typeof $.i18n !== "undefined") {
                        	me.finishRequest("",$.i18n.t("myselections_error_deleted", {"name": name}));
                        } else {
                            me.finishRequest("", "Failed to delete the selection '" + name + "'!");
                        }
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
            if (typeof $.i18n !== "undefined") {
            	this.$el.localize();
            }
            return this;
        }

    });

    return View;
}));
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.SegmentSelector = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        segment : null,
        displayName : null,
        onCheck : null,
        template : squid_api.template.squid_api_filters_segment_widget,
        disabled : false,

        initialize : function(options) {
            this.segment = options.segment;
            this.displayName = options.displayName;
            this.config = squid_api.model.config;
            if (options.onCheck) {
                this.onCheck = options.onCheck;
            } else {
                this.onCheck = "set";
            }
            // in order to replace segment when checkbox is on / off
            if (options.replaceWith) {
                this.replaceWith = options.replaceWith;
            }

            if (this.config) {
                this.listenTo(this.config, 'change:selection', this.render);
            }

            // listen for global status change
            this.listenTo(squid_api.model.status, 'change:status', this.render);
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.disabled === false) {
                    this.disabled = true;
                    var segment = this.getSegment();

                    var selection = $.extend(true, {}, this.config.get("selection"));
                    if (segment !== null) {
                        var selectedItems = segment.selectedItems;
                        var selectedItemsUpdated = [];
                        var isChecked = event.target.checked;
                        if (this.onCheck == "unset") {
                            isChecked = !isChecked;
                        }
                        for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                            var item = selectedItems[sIdx];
                            if (isChecked || (item.id !== this.segment)) {
                                if (item.id !== this.replaceWith) {
                                    selectedItemsUpdated.push(item);
                                }
                            }
                        }
                        if (this.replaceWith) {
                            if (! isChecked) {
                                selectedItemsUpdated.push({"id" : this.replaceWith, "type" : "v"});
                            }
                        }
                        if (isChecked) {
                            selectedItemsUpdated.push({"id" : this.segment, "type" : "v"});
                        }

                        // update config selection
                        if (selection) {
                            if (selection.facets) {
                                var facets = selection.facets;
                                for (i=0; i<facets.length; i++) {
                                    if (facets[i].dimension.type == "SEGMENTS") {
                                        facets[i].selectedItems = selectedItemsUpdated;
                                    }
                                }
                                selection.facets = facets;
                            }
                        }
                        this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
                    }
                }
            }
        },

        getSegment : function() {
            var segment = null;
            var selection = this.config.get('selection');
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // lookup segment facet
                    for (var fIdx = 0; fIdx < facets.length; fIdx++) {
                        var facet = facets[fIdx];
                        if (!facet) {
                            continue;
                        }
                        if (facet.dimension.type == "SEGMENTS") {
                            // check if the segment is selected
                            segment = facet;
                        }
                    }
                }
            }
            return segment;
        },

        render : function() {
            var selHTML = null;
            var isSelected = false;
            if (this.config) {
                // check if the segment is selected
                var segment = this.getSegment();
                if (segment) {
                    var selectedItems = segment.selectedItems;
                    for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                        var item = selectedItems[sIdx];
                        if (item.id == this.segment) {
                            isSelected = true;
                        }
                    }
                }

                if (this.onCheck == "unset") {
                    isSelected = !isSelected;
                }

                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "isSelected" : isSelected,
                    "displayName" : this.displayName,
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            // treat global status
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running === true) {
                // computation is running : disable input
                this.$el.find("input").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.disabled = false;
                this.$el.find("input").removeAttr("disabled");
            }

            return this;
        }

    });

    return View;
}));

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

// squid_api_selection_widget.js
(function (root, factory) {
    root.squid_api.view.SelectionView = factory(root.Backbone, root.squid_api, root.squid_api.template.squid_api_selection_widget);
}(this, function (Backbone, squid_api, template) {
    var View = Backbone.View.extend( {

        model: null,
        template : null,
        selection : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (this.model) {
                this.model.on('change:selection', this.render, this);
                this.model.on('change:enabled', this.enabled, this);
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        unselect : function(dimension,value) {
            var sel = this.model.get("selection");
            var userSel = { "facets" : [] };
            for (var i=0; i<sel.facets.length; i++) {
                var facet = sel.facets[i];
                var userFacet = {"dimension" : facet.dimension, "selectedItems" : [], "id" : facet.id, "items" : facet.items, "totalSize" : facet.totalSize};
                userSel.facets.push(userFacet);
                for (var j=0;j<facet.selectedItems.length;j++) {
                    var item = facet.selectedItems[j];
                    if ((facet.dimension.oid == dimension.oid) && (item.id==value.item.id || (value.item.id==-1 && item.value==value.item.value))) {
                        // unselect this item
                    } else {
                        userFacet.selectedItems.push(item);
                    }
                }
            }
            squid_api.model.config.set("selection", userSel);
        },

        events: {
            "click .clear-filter": function(event) {
                event.preventDefault();
                if (this.model.get("selection") && this.selection && this.model.isDone()) {
                    var index = event.target.id;
                    if (index>=0) {
                        var idx = 0;
                        for (var key in this.selection) {
                            var sel = this.selection[key];
                            for (var j=0;j<sel.selection.length;j++) {
                                if (index==idx++) {
                                    this.unselect(sel.dimension,sel.selection[j]);
                                }
                            }
                        }
                    }
                }
            }
        },

        enabled : function() {
            if (this.model.get("enabled")) {
                this.$el.find('.clear-filter').removeAttr('disabled');
            } else {
                this.$el.find('.clear-filter').attr('disabled',"disabled");
            }
        },

        render : function() {
            if (this.model && this.model.get("selection")) {
                this.selection = this.model.getSelection();
                for (var key in this.selection) {
                    for (var i=0;i<this.selection[key].selection.length;i++) {
                        var item = this.selection[key].selection[i];
                        if (item.item.id===0 && item.item.value=="true") {
                            item.value = " ";
                        }
                    }
                }
                if (this.selection) {
                    // get HTML template and fill corresponding data
                    var empty = true;
                    var selection = this.model.get("selection").facets;

                    for (var facet=0; facet<selection.length; facet++) {
                        if (selection[facet].dimension.type !== "CONTINUOUS") {
                            if (selection[facet].selectedItems.length !== 0) {
                                empty = false;
                            }
                        }
                    }

                    var selHTML = this.template({
                        "facets" : this.selection,
                        "empty" : empty
                    });
                    // render HTML
                    this.$el.html(selHTML);
                }
                this.enabled();
            }
            return this;
        },

    });

    return View;
}));
