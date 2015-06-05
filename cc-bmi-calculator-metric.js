/*
Author: Calculators Canada
Author URI: http://calculatorscanada.ca/
*/

//var $J = jQuery.noConflict();

jQuery(document).ready(function ($) {
    // runtime events

    $(".bmi-height-metric").keydown(function (event) {
        if (!(isDecimalKey(event, this.value))) event.preventDefault();
    });

    $(".bmi-height-metric").keyup(function () {
        calculate_bmi_metric(get_id(this.id, "bmi-height-metric"));
    });

    $(".bmi-weight-metric").keydown(function (event) {
        if (!(isDecimalKey(event, this.value))) event.preventDefault();
    });

    $(".bmi-weight-metric").keyup(function () {
        calculate_bmi_metric(get_id(this.id, "bmi-weight-metric"));
    });

    $(".bmi-metric-clear").click(function () {
        clear_bmi_metric_values(get_id(this.id, "bmi-metric-clear"));
    });

    $(".bmi-metric-calculate").click(function () {
        calculate_bmi_metric(get_id(this.id, "bmi-metric-calculate"));
    });



    function clear_bmi_metric_values(widget_id) {
        $('#' + widget_id + '-bmi-height-metric').val("");
        $('#' + widget_id + '-bmi-weight-metric').val("");
        $('#' + widget_id + '-bmi-metric').html("");
        $('#' + widget_id + '-bmi-metric-results').hide();
    };

    function calculate_bmi_metric(widget_id) {
        var height = $('#' + widget_id + '-bmi-height-metric').val(),
            weight = $('#' + widget_id + '-bmi-weight-metric').val();

        // if no data entered
        if (isNaN(height) || height == "" || isNaN(weight) || weight == "") {
            return;
        }

        var height_in_meters = height / 100;

        bmi = weight / (height_in_meters * height_in_meters);

        var bmi_category, bmi_style;
        bmi_style = 'alert-success';
        bmi_category = 'normal';
        if (bmi < 16) {
            bmi_style = 'alert-danger';
            bmi_category = 'severe thinness';
        } else if (bmi < 17) {
            bmi_style = 'alert-warning';
            bmi_category = 'moderate thinness';
        } else if (bmi < 18.5) {
            bmi_style = 'alert-info';
            bmi_category = 'mild thinness';
        } else if (bmi < 25) {
            bmi_style = 'alert-success';
            bmi_category = 'normal';
        } else if (bmi < 30) {
            bmi_style = 'alert-info';
            bmi_category = 'pre obese';
        } else if (bmi < 35) {
            bmi_style = 'alert-warning';
            bmi_category = 'obese class I';
        } else if (bmi < 40) {
            bmi_style = 'alert-warning';
            bmi_category = 'obese class II';
        } else {
            bmi_style = 'alert-danger';
            bmi_category = 'obese class III';
        }

        $('#' + widget_id + '-bmi-metric').html("Your BMI is " + round2TwoDecimals(bmi).toString() + " (" + bmi_category + ")");
        $('#' + widget_id + '-bmi-metric').toggleClass('alert-success alert-info alert-warning alert-danger', false);
        $('#' + widget_id + '-bmi-metric').toggleClass(bmi_style, true);
        $('#' + widget_id + '-bmi-metric-results').show();

    };

});

    function get_id(long_id, fieldname) {
        return long_id.substr(0, long_id.lastIndexOf(fieldname) - 1);
    };


function isIntegerKey(e)	  
      {
         var key = e.which || e.keyCode;
		 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		 var isInteger = (!e.shiftKey) && (key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
		return isInteger;
				
      };
	  
function isDecimalKey(e, number)
      {
         var key = e.which || e.keyCode;
		 // numbers (48-57 and 96-105), dot (110,190), comma (44,188), backspace(8), tab (9), navigation keys (35-40), DEL(46)
		 if ((!e.shiftKey) && ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 110 || key == 190 || key == 8 || key == 9 || (35 <= key && key <= 40) || key == 46 ))
		 	{
			 		  if (key == 110 || key == 190)
					  {
					   	 // skip it if comma or decimal point already entered or it is empty field yet
						 if (number.indexOf(".") > -1 || number.indexOf(",") > -1 || number.length == 0) 
						 	return false; 
					  }
			          return true;
			}

         return false;
      };

function radioValue(element)	  
		 {
		    var returnValue = "";
            var radios = document.getElementsByName(element);
            
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    returnValue = radios[i].value;
                }
			}
			return returnValue;	
		 };	  	
function round2TwoDecimals(number)
		 {
 		    return Math.round(number*100)/100						 
		 };	
 



