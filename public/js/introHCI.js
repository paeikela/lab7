'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	$(".likeCtr").click(liked);
}

function liked(e){
  ga('create', 'UA-92521906-1', 'auto');
  ga('send', 'pageview', 'like','click');
}