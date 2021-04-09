// alert
$ (document).ready(function(){

	alert("Welcome to my website");

});

// button alert
$(document).ready(function(){
	// alert

	$('button').click(function(){
		alert("bye bye people")
	});

	// alert

	$('#btn-c').hover(function(){
		alert("hello people")
	});


});

// button hide
$(document).ready(function(){

		// hide
	$('#hide').click(function(){
		$('p').hide(1000);
	});

	// show
	$('#show').click(function(){
		$('p').show(1000);
	});

	// show
	$('#toggle').click(function(){
		$('p').toggle(1000);
	});

	// fadeout
	$('#fadeout').click(function(){
		$('p').fadeOut();
	});

	// fadein
	$('#fadein').click(function(){
		$('p').fadeIn();
	});

	// fadetoggle
	$('#fadetoggle').click(function(){
		$('p').fadeToggle();
	});
});

// slider toggle
$(document).ready(function(){
	
	$('.panel').click(function(){
		$('.containt').slideToggle(1000);
	});



});