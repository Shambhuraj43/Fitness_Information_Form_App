/**************************************
 AUTHOR: Shambhuraj Wadghule
PURPOSE: Simple Validation using JQuery Validation Plugin.
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

  //submit and reset buttons
  $("input[type='submit']").button();
  $("input[type='reset']").button();

  //Array of key-value pairs to store form data
  var data;

  // Add cities
  var availableTags = [
    "Indianapolis",
    "Washington",
    "Chicago",
    "Michigan",
    "New York City",
    "Los Angeles",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Denton",
    "Visalia",
    "Orange",
    "Warren",
    "Pasadena",
    "Waco",
    "Dayton",
    "Hampton",
    "Seattle"
  ];

  $("#accordion").accordion();

  $("#autocomplete").autocomplete({
    source: availableTags
  });

  $("#datepicker").datepicker({
    inline: true
  });

  // ************************************************* //

  $(function() {
    $("#slider-range").slider({
      range: "min",
      value: 3,
      min: 1,
      max: 7,
      slide: function(event, ui) {
        $("#numDays").val(ui.value);
      }
    });
    $("#numDays").val($("#slider-range").slider("value"));
  });

  // *************************************************//

  //simple validation using jQuery validation
  $.validator.setDefaults({
    submitHandler: function() {

      // Scrape Data
      var strFirstName = $('#FirstName').val(); //First name
      var strMiddleName = $('#MiddleName').val(); //Middle Name
      var strLastName = $('#LastName').val(); //Last Name
      var strTelephone = $('#Telephone').val(); //Telephone
      var strEmail = $('#Email').val(); //Email
      var strCity = $('#autocomplete').val(); //City


      //Sign In Information
      var strUsername = $('#username').val(); //Username
      var strPassword = $('#password').val(); //Password

      //radio buttons
      var strGender = $('input[name="Gender"]:checked').val(); //Gender

      var strTypeofExercise = null;

      //Checkboxes                                                //Type of Exercise
      $('input[name="TypeofExercise"]:checked').each(function() {
        strTypeofExercise += $(this).val() + " ";
      });
      //Check if file is picked up
      var strBirthDate = $('#datepicker').val(); //Birthdate
      var strHeight = $("#height").val(); //Height
      var strBMI = $("#bmi").val(); //BMI
      var strWeight = $("#weight").val(); //Weight
      var strAllergy = $("#allergy").val(); //Allergy

      // alert("Test 1");
      //display form data in output section
      $('#output').append("<br><br> First Name: " + strFirstName)
        .append("<br> Middle Name: " + strMiddleName)
        .append("<br> Last Name: " + strLastName)
        .append("<br> Telephone: " + strTelephone)
        .append("<br> Email: " + strEmail)
        .append("<br> City: " + strCity)
        .append("<br><br> Username: " + strUsername)
        .append("<br> Password: " + strPassword)
        .append("<br> Gender: " + strGender)
        .append("<br> Type of Exercise: " + strTypeofExercise)
        .append("<br> Birth Date: " + strBirthDate)
        .append("<br> Height: " + strHeight)
        .append("<br> BMI: " + strBMI)
        .append("<br> Weight: " + strWeight)
        .append("<br> Allergy: " + strAllergy);


      // alert("Test 2");
    }

    // // Define error error Placement
    // errorPlacement: function (error, element) {
    //   		error.insertAfter(element);
    // }
  });

  $("#myForm").validate();
  //End of validation //

  //**********************************************************//

  //
  //   //**********************************************************//
  //   //Custom Validation
  //   $("#myForm").validate({
  // 		rules: {
  //
  //       FirstName: {
  // 				required: true,
  // 				maxlength: 10
  // 			},
  //
  //       MiddleName: {
  // 				required: false,
  // 				maxlength: 10
  // 			},
  //
  //       LastName: {
  // 				required: true,
  // 				maxlength: 10
  // 			},
  //
  //       Telephone: {
  //         required: true,
  //         digits: true,
  //         maxlength: 10,
  //         minlength: 10
  //       },
  //
  //       Email: {
  // 				required: true,
  // 				email: true
  // 			},
  //
  //
  // 			username: {
  // 				required: true,
  // 				maxlength: 10
  // 			},
  //
  // 			password: {
  // 				required: true,
  // 				minlength: 8
  // 			},
  //
  // 			datepicker: {
  // 				required: true,
  // 				date: true
  // 			},
  //
  //       height: {
  // 				required: true,
  // 			  digits: true,
  //         maxlength: 4,
  //         minlength: 2
  // 			},
  //
  //       bmi: {
  //         required: false
  //
  //       },
  //
  //       weight: {
  //         required: true,
  //         digits: true,
  //         maxlength: 4,
  //         minlength: 2
  //       },
  //
  //       numDays: {
  //         required: false
  //       },
  //
  //       allergy: {
  //         required: true,
  //         maxlength: 100
  //       },
  //
  //     },
  //
  //   //messages to show if error
  //   messages: {
  //
  //
  //     FirstName: {
  //       required: "Please enter a first name",
  //       maxlength: 10
  //     },
  //
  //     LastName: {
  //       required: "Please enter a last name",
  //       maxlength: 10
  //     },
  //
  //
  //       //username, message if empty, or too short
  //       username: {
  // 				required: " Please enter a username",
  // 				maxlength: $.validator.format(" Must not have more than {0} characters")
  // 			},
  //
  //
  //       //pass, message if empty, or too short
  // 			password: {
  // 				required: " Please provide a password",
  // 				minlength: $.validator.format(" Must have at least {0} characters")
  // 			},
  //
  //
  //       //delivery date, message if empty, or not valid date
  // 			datepicker: {
  // 				required: " Please enter birth date",
  // 				date: " Please enter a valid date"
  // 			},
  //
  //       //phone number, message if empty, more than 10 digits,
  // 			Telephone: {
  // 				required: " Please enter a phone number",
  // 				digits: " Please enter digits only",
  // 				maxlength: " Only 10 characters allowed",
  //         minlength: "Must be 10 characters"
  // 			},
  //
  //       //email, message if empty, or not valid
  // 			Email: {
  // 				required: " Please enter an email address",
  // 				email: " Please enter a valid email address"
  // 			},
  //
  // 		}
  // });
  //


});
