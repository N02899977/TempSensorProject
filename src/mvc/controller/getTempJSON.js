function isNumber(obj) { return !isNaN(parseFloat(obj)) }

/** 
 * This function, when passed an array of integers and a number (or string)
 * returns with only numbers / entries that are from the respective floor.
 * If the floorNum is numeric, for example, 3, only entries that start with 
 * the number 3 will be returned in the second array. If the floorNum is a string,
 * such as 'B', (for basement), entries such as 'B03' will be returned.
*/
function getAllFromSpecificFloor(floorNum, arrayOfRoomNum) {
	arrayToReturn;
	
	if (isNumber(floorNum) == false) {
		
	} else {
		for (i = 0; i < arrayOfRoomNum.length; i++) {
			if (arrayOfRoomNum[i] / 100  == floorNum) {
				arrayToReturn.push(arrayOfRoomNum);
			}
		}
	}
	return arrayToReturn;
}

/**
 * Returns the average value when passed an integer array
 */
function getAverage(room) {		
	var sum = 0;
	climate_params = 'http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=' + room;
	
	// Get JSON object from a the above link (stored in climate_params)
	$.getJSON( climate_params, function(results){
	
	}).done(function(results){
		
		// Retrieve the length of the array of entries
		length = results["info"].length;

   	  // Loop through integer array, and sum all indices
      results["info"].forEach(function(packet) {
	        
    	// Add all of the temperature values into one variable called sum
	    sum = sum + parseFloat(packet.tempF);		   
	    });
      
      // Despite the fact that I recalculate average here, it still returns 20 
      // I suppose this is because it is hard coded
      
      // These print line statements demonstrate that the values
      // are being retrieved and computed properly
      console.log("Room:" + room);
      console.log("Sum: " + sum);
      console.log("Length: " + length);
      console.log("Average: " + sum/length);
      // This line ensures that the data type of average is numeric
      //console.log("Average is a number: " + isNumber(average));
      console.log("");  
	});

	// Average
	return sum/length;
}