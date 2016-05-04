// Returns the average value when passed an integer array
function getAverage(room) {		
	// initialize sum to 0
	var sum = 0;
	length = 0;
	
	climate_params = 'http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=' + room;
	
	$.getJSON( climate_params, function(results){
	
	}).done(function(results){
		length = results["info"].length;

   	  // Loop through integer array, and sum all indices
      results["info"].forEach(function(packet) {
	        
	    sum += parseFloat(packet.tempF);		   
	    });
      console.log("Room:" + room);
      console.log("Sum: " + sum);
      console.log("Length: " + length);
      console.log("Average: " + sum/length);
      console.log("");
	});

	// Return the sum divided by the length (average)
	return sum/length;
}