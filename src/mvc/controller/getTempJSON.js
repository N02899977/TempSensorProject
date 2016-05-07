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
	
	// Get JSON object from a the above link (stored in climate_params)
	/*$.getJSON( climate_params, function(results) {
	
	}).done(function(results) {
		
		// Retrieve the length of the array of entries
		length = results["info"].length;

   	  // Loop through integer array, and sum all indices
      results["info"].forEach(function(packet) {
	        
    	// Add all of the temperature values into one variable called sum
	    sum = sum + parseFloat(packet.tempF);		   
	    });
      
      var average = sum / length;
      
      // These print line statements demonstrate that the values
      // are being retrieved and computed properly
      console.log("Room:" + room);
      console.log("Sum: " + sum);
      console.log("Length: " + length);
      console.log("Average: " + average);
      
      // This line ensures that the data type of average is numeric
      console.log("Average is a number: " + isNumber(average));
      console.log(""); 
	});*/

	
}