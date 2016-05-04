function isNumber(obj) { return !isNaN(parseFloat(obj)) }

// Returns the average value when passed an integer array
function getAverage(room) {		
	// initialize sum to 0
	var sum = 0;
	
	// If you set the default value to 20, it will graph all 20s
	var average = 20;
	length = 0;
	
	climate_params = 'http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=' + room;
	
	$.getJSON( climate_params, function(results){
	
	}).done(function(results){
		length = results["info"].length;

   	  // Loop through integer array, and sum all indices
      results["info"].forEach(function(packet) {
	        
	    sum += parseFloat(packet.tempF);		   
	    });
      
      // Despite the fact that I recalculate average here, it still returns 20 
      // I suppose this is because it is hard coded
      average = (sum/length).toFixed(3);
      
      console.log("Room:" + room);
      console.log("Sum: " + sum);
      console.log("Length: " + length);
      console.log("Average: " + average);
      console.log("");
	});

	// Return the sum divided by the length (average)
	return average;
}