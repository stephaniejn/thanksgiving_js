var compress = function(string){
	var counter = 1
	var newString = ""
	for(var i =0; i<=string.length; i++){
		if(string[i]===string[i+1]){
			counter ++;
		}
		else if(string[i]!==string[i+1]){
			if(counter >1){
				newString += counter + string[i];
				counter = 1;
			}
			else{
				newString += string[i];
				counter = 1;
			}

		}
		
	}
	return newString;
}
console.log(compress("AAASSSDDDDRDDSASSDDDSSSAD"));