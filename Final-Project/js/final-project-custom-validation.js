/**************************************
Filename: final-project-custom-validation.js
Written by: Shambhuraj H. Wadghule
Purpose: Getting the jQuery UI and the customized jQuery Validation plugin to work together
Date: 01 December 2021
Modification History:
03 Dec 2021: Modified submit button functionality of the form.
***************************************/

/********************************************************************************************
 * This file creates JavaScript for the form. The form contains several HTML elements          *
 * that are used to get input from the user.                                             *
 * The data obtaned from the user needs tobeb validated. The validation is doing using   *
 * JQuery Validation plugin as well as the custom rules for validation.                  *
 *********************************************************************************************/


$(document).ready(function() {

    /* jQuery UI Library definitions */
    $("input[type='submit']").button(); //JQuery submit button
    $("input[type='reset']").button(); //JQuery reset button

    //Array of key-value pairs to store form data

    //cities array for autocomplete provided by JQuery theme
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

    //Accordion function from JQuery UI library
    $("#accordion").accordion();

    //Autocomplete function from JQuery UI library
    $("#autocomplete").autocomplete({
        source: availableTags
    }); //autocomplete end

    //Datepicker function from JQuery UI library
    $("#datepicker").datepicker({
        inline: true
    }); //datepicker end

    //Checkboxes function from JQuery UI library
    $( 'input[name="checkbox"]:checked' ).checkboxradio();

    //Radio function from JQuery UI library
    $( 'input[name="radio"]:checked' ).checkboxradio();



    //Slider functionfrom JQuery UI library
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
    }); //end slider Funtion


    //simple validation using jQuery validation
    $.validator.setDefaults({
        submitHandler: function() {

            // Scrape form Data
            var strFirstName = $('#FirstName').val(); //First name
            var strMiddleName = $('#MiddleName').val(); //Middle Name
            var strLastName = $('#LastName').val(); //Last Name
            var strTelephone = $('#Telephone').val(); //Telephone
            var strEmail = $('#Email').val(); //Email
            var strCity = $('#autocomplete').val(); //City

            //Store the form data input by the user into designated variables
            //Sign In Information
            var strUsername = $('#username').val(); //Username
            var strPassword = $('#password').val(); //Password

            //radio buttons
            var strGender = $('input[name="Gender"]:checked').val(); //Gender

            //Checkboxes declaration and initialization to empty string
            var strTypeofExercise = "";

            //Getting checked input by the user using for loop
            $('input[name="TypeofExercise"]:checked').each(function() {		// List checked rocks
					         strTypeofExercise += $(this).val() + " ";
				    });

            var strBirthDate = $('#datepicker').val(); //Birthdate
            var strHeight = $("#height").val(); //Height
            var strBMI = $("#bmi").val(); //BMI
            var strWeight = $("#weight").val(); //Weight
            var strNumDays = $("#numDays").val();    //Number of days willing to Workout
            var strAllergy = $("#allergy").val(); //Allergy

            //display form data in output section
            $('#output').append("<br><br> First Name: " + strFirstName) //output strFirstName
                .append("<br> Middle Name: " + strMiddleName) //output strMiddleName
                .append("<br> Last Name: " + strLastName) //output strLastName
                .append("<br> Telephone: " + strTelephone) //output strTelephone
                .append("<br> Email: " + strEmail) //output strEmail
                .append("<br> City: " + strCity) //output strCity
                .append("<br><br> Username: " + strUsername) //output strUsername
                .append("<br> Password: " + strPassword) //output strPassword
                .append("<br> Gender: " + strGender) //output strGender
                .append("<br> Type of Exercise: " + strTypeofExercise) //output strTypeofExercise
                .append("<br> Birth Date: " + strBirthDate) //output  strBirthDate
                .append("<br> Height: " + strHeight) //output strHeight
                .append("<br> BMI: " + strBMI) //output strBMI
                .append("<br> Weight: " + strWeight) //output strNumDays
                .append("<br> Number of days willing to workout: " + strNumDays) //output strWeight
                .append("<br> Allergy: " + strAllergy); //output strAllergy
        } //end submitHandler

    }); //end setDefaults

    /*End JQUERY UI Library*/

    //Custom Validation rules definition and messages defiition
    $("#myForm").validate({
        rules: {

            //First Name rules
            FirstName: {
                required: true,
                maxlength: 10
            },

            //Middle Name rules
            MiddleName: {
                required: true,
                maxlength: 10
            },

            //Last Name rules
            LastName: {
                required: true,
                maxlength: 10
            },

            //Telephone rules
            Telephone: {
                required: true,
                digits: true,
                maxlength: 10,
                minlength: 10
            },

            //Email rules
            Email: {
                required: true,
                email: true
            },

            //Username rules
            username: {
                required: true,
                maxlength: 10
            },

            //Password rules
            password: {
                required: true,
                minlength: 8
            },

            //Birth Date rules
            datepicker: {
                required: true,
                date: true
            },

            //Height rules
            height: {
                required: true,
                digits: true,
                maxlength: 4,
                minlength: 2
            },

            //BMI rules
            bmi: {
                required: true,
                digits: true,
                maxlength: 3,
                minlength: 1

            },

            //Weight rules
            weight: {
                required: true,
                digits: true,
                maxlength: 4,
                minlength: 2
            },

            //Number of days rules
            numDays: {
                required: true
            },

            //Allergy rules
            allergy: {
                required: true,
                maxlength: 100
            }
        },

        //messages to show if error occurs
        messages: {

            //first name, message if empty or less characters
            FirstName: {
                required: "Please enter a first name",
                maxlength: $.validator.format("Must not have more than {0} characters")
            },

            //middlename, message if empty or less characters
            MiddleName: {
                required: "Please enter a middle name",
                maxlength: $.validator.format("Must not have more than {0} characters")
            },

            //Last name, message if empty or less characters
            LastName: {
                required: "Please enter a last name",
                maxlength: $.validator.format("Must have at least {0} characters")
            },

            //username, message if empty or less characters
            username: {
                required: " Please enter a username",
                maxlength: $.validator.format(" Must not have more than {0} characters")
            },


            //password, message if empty, or too short
            password: {
                required: "Please provide a password",
                minlength: $.validator.format(" Must have at least {0} characters")
            },


            //birth date, message if empty, or not valid date
            datepicker: {
                required: "Please enter birth date",
                date: "Please enter a valid date"
            },

            //phone number, message if empty, more than 10 digits,
            Telephone: {
                required: "Please enter a phone number",
                digits: "Please enter digits only",
                maxlength: "Only 10 characters allowed",
                minlength: "Must be 10 characters"
            },

            //email, message if empty, or not valid
            Email: {
                required: "Please enter an email address",
                email: " Please enter a valid email address"
            },

            //height, message if empty, or not valid
            height: {
                required: "Please enter height",
                digits: "Please enter digits only",
                maxlength: "Only 3 characters allowed",
                minlength: "Must be 2 characters"
            },

            //bmi, message if empty, or not valid
            bmi: {
                required: "Please enter BMI",
                digits: "Please enter digits only",
                maxlength: "Only 3 characters allowed",
                minlength: "Must be 2 characters"

            },

            //weight, message if empty, or not valid
            weight: {
                required: "Please enter weight",
                digits: "Please enter digits only",
                maxlength: "Only 5 characters allowed",
                minlength: "Must be 2 characters"
            },

            //numDays, message if empty, or not valid
            numDays: {
                required: "Enter number of days"
            },

            //allergy, message if empty, or not valid
            allergy: {
                required: "Please enter any allergies, if none, enter NONE",
                minlength: "Must be 2 characters"
            }

        } //end message rules
    }); //myForm vallidate

}); //end document ready
