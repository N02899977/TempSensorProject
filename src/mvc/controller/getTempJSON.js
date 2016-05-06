function isNumber(obj) { return !isNaN(parseFloat(obj))}

/**
 * Returns the average value when passed an integer array
 */
function getAverage(room) {		
	var sum = 0;
	climate_params = 'http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=' + room;
	
	// Get JSON object from a the above link (stored in climate_params)
	$.getJSON( climate_params, function(results) {
	
	}).done(function(results) {
		
		// Retrieve the length of the array of entries
		length = results["info"].length;

   	  // Loop through integer array, and sum all indices
      results["info"].forEach(function(packet) {
	        
    	// Add all of the temperature values into one variable called sum
	    sum = sum + parseFloat(packet.tempF);		   
	    });
      
      average = sum / length;
      
      // Despite the fact that I recalculate average here, it still returns 20 
      // I suppose this is because it is hard coded
      
      // These print line statements demonstrate that the values
      // are being retrieved and computed properly
      console.log("Room:" + room);
      console.log("Sum: " + sum);
      console.log("Length: " + length);
      console.log("Average: " + average);
      
      // This line ensures that the data type of average is numeric
      console.log("Average is a number: " + isNumber(average));
      console.log("");   
	});

	// Average
	return average;
}