var css = '.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info { background: rgb(0, 0, 0); background-color: rgb(0, 0, 0); border-color:rgb(0, 0, 0); } .pub-reporting-tpl .no-data-message, .pub-dash-tpl .error, .pub-brand-filter .green, .pretty-inv-code.ng-binding, .green, .green.ng-hide, .tab.ng-animate.selected-add, .value.count.ng-binding, .tab.ng-animate.clickable-add, .value.ng-binding, .error.ng-animate.ng-hide-add, .tab.clickable span, .fa.fa-arrow-circle-left.big-icon.cf-float-left.right-margin, .big.green.light, .highlight-info.ng-binding { color: rgb(242, 103, 58); } .round-workflow-icon, .text-center.day.ng-scope.ng-binding.btn-info, .btn.btn-primary.float-right, .btn.btn-primary.btn-block, .btn.btn-large.btn-primary.light-font, .btn.btn-primary.cf-float-right.ng-animate.inactive-add, .btn.btn-primary.btn-add.pull-right.top-margin, .btn btn-primary.btn-block, .round-workflow-icon, .pub-reporting-tpl .round-workflow-icon, .dropdown-menu.extended li p.green, .btn-primary, .btn-info, .modal-header, .btn-success { background: rgb(242, 103, 58); background-color: rgb(242, 103, 58); border-color:rgb(242, 103, 58); }  ';
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
	style.styleSheet.cssText = css;
} 
else {
	style.appendChild(document.createTextNode(css));
}

head.appendChild(style);