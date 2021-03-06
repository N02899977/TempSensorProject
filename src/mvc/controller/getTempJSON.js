/**
 * Written by Heidi Fritz
 * */

function isNumber(obj) { return !isNaN(parseFloat(obj))}

/**
 * Returns the average value when passed an integer array
 */
function getAverage(room) {		
	var sum = 0;
	var url = 'http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=' + room;
	var average = 0;
	
	jQuery.extend({
        	getSum: function(url){
		        var sum = 0;
		        $.ajax({
		          url: url,
				  data: {info: 1},
		          dataType: 'json',
		          async: false,
		          success: function(results){
					results["info"].forEach(function(item) {
				          sum = sum + parseFloat(item.tempF);
				    });},
		        });
		    return sum;
        	}, // end getAverageTemp
        	getLength: function(url){
		        var length;
		        $.ajax({
		          url: url,
				  data: {info: 1},
		          dataType: 'json',
		          async: false,
		          success: function(results){
					length = results["info"].length;
					},
		        });
		    return length;
        	},  // end getLength
     });  // end jQuery.extend
     
     var sum = $.getSum(url);
     //console.log("Sum: " + sum);
     var length = $.getLength(url);
     //console.log("Length: " + length);
     average = sum/length;
     
     return average;
}