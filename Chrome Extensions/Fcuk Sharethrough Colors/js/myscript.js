//alert("Hello");
//var x = jQuery(".btn");
//console.log(x);

//var elems = document.querySelectorAll("span.ng-binding");

var elems = jQuery("span.ng-binding");

jQuery.each(elems, function (index, elem) {
	console.log(elem.innerText);
	if( elem.innerText == "Dashboard" ||  "Placement Management" || "Reporting" || "Brand Targeting"	) {
		jQuery( elem ).bind( "click", function() {
 			 colorize();
		});
		//to ensure all objects are bound ... weird thing with parents ya know
		jQuery( jQuery(elem).parent() ).bind( "click", function() {
 			 colorize();
		});
	}
});

/*
for ( var n = 0, length = elems.length; n < length; n++ ) {
	if ( elems[n].innerText == "Dashboard" ) {
		jQuery(elems[n]).bind( "click", function() {
  			colorize();
		});
	}
}
*/

	// .. or adding custom stylesheets

	var css = '.pretty-inv-code.ng-binding { color: rgb(242, 103, 58);  }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet) {
  		style.styleSheet.cssText = css;
	} 
	else {
 	 style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);


function colorize() {
	var items = document.body.getElementsByTagName("*");

	// Two ways to colorize ... finding all the object with color ...
	for ( var i = 0, l = items.length; i < l; i++ ) {
		if( window.getComputedStyle(items[i]).backgroundColor == "rgb(88, 201, 243)" || 
			window.getComputedStyle(items[i]).backgroundColor == "rgb(65, 202, 192)" ) {
	   		items[i].style.backgroundColor = "rgb(242, 103, 58)";
	   		items[i].style.borderColor = "rgb(242, 103, 58)";

		}
		if( window.getComputedStyle(items[i]).color == "rgb(88, 201, 243)" ||
			window.getComputedStyle(items[i]).color == "rgb(65, 202, 192)" ||
			window.getComputedStyle(items[i]).color == "rgb(108, 202, 201)" ) {
	   		items[i].style.color = "rgb(242, 103, 58)";
	   	}
	}
}
