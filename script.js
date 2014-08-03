
		// addClass "current" to id("nav-addfilter");
		// removeClass "current" to id("nav-myfilters");
		// addClass "hide" to id("myfilters")l
		// removeClass "hide" to id("addfilter");

// If I click on "My Filters" (Switch Add Filter to My Filters)
		// addClass "current" to id("nav-myfilters");
		// removeClass "current" to id("nav-addfilter");
		// addClass "hide" to id("addfilter")l
		// removeClass "hide" to id("myfilters");



// Hide-Show the right view
window.onload = function() {

	// Switch My Filters
	$("#nav-myfilters").click(function() {
		$('#nav-addfilter').removeClass('current');
		$('#nav-myfilters').addClass('current');
		$('#myfilters').removeClass('hide');
		$('#addfilter').addClass('hide');
	});

	// Switch Add Filter
	$("#nav-addfilter").click(function() {
		$('#nav-myfilters').removeClass('current');
		$('#nav-addfilter').addClass('current');
		$('#addfilter').removeClass('hide');
		$('#myfilters').addClass('hide');
	});


	// Hide new Keyword
	$("#applyFilter").click(function() {

		// Check the value in the keyword input
		 var valueFilter = $("#newFilter").val();

		// NewRegExp with case insensitive
		 maRegex = new RegExp(valueFilter, 'ig');

		// Hide all tweets based on the value
		 $(".tweet-text").filter(function(){ return maRegex.test( $(this).text() ); }).closest('.stream-item').hide();
		 console.log(maRegex.test( $(this).text() ));
		// Add an ID to all regex to show filters in #MyFilters
		// Stock all values in the user Local Storage
	});

}







