/**************************************
 AUTHOR: Shambhuraj Wadghule
PURPOSE: Implement Different JQuery Events.
ORIGINALLY CREATED ON: 11/10/2021
LAST MODIFIED BY: Shambhuraj Wadghule
MODIFICATION HISTORY:
10/29/2021: Original Build
***************************************/

/************************************************
Tested in Google Chrome and Mozilla Firefox
  Did not face any issues. The functions are working fine.
  Nothing needed to be changed.
************************************************/


/*****************************************************************************************************************/



$(document).ready(function() {

// Add cities
  var availableTags = [
  	"Indiana",
  	"Washington DC",
  	"Chicago",
  	"BASIC",
  	"C",
  	"C++",
  	"Clojure",
  	"COBOL",
  	"ColdFusion",
  	"Erlang",
  	"Fortran",
  	"Groovy",
  	"Haskell",
  	"Java",
  	"JavaScript",
  	"Lisp",
  	"Perl",
  	"PHP",
  	"Python",
  	"Ruby",
  	"Scala",
  	"Scheme"
  ];

$( "#accordion" ).accordion();

$( "#autocomplete" ).autocomplete({
	source: availableTags
});

$( "#datepicker" ).datepicker({
 inline: true
});



 $("#submit").click(function(){
   $( "#output" ).text("Form Submitted");
 });



 $("#reset").click(resetForm);

 function resetForm() {

    $("#myForm").trigger("reset");
}



$( function() {
 $( "#slider-range" ).slider({
   range: "min",
   value: 3,
   min: 1,
   max: 7,
   slide: function( event, ui ) {
     $( "#numDays" ).val(  ui.value );
   }
 });
 $( "#numDays" ).val( $( "#slider-range" ).slider( "value" ) );
});

});
