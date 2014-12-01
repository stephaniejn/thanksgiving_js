var isPrime = function(num){
	var counter = 0
	for (var i = 0; i<=num; i++){
		if (num % i == 0){
			counter = counter + i;
		}}

		if(counter > i){
			console.log (num + " is not a prime number!");
			counter = 0
			return false;
		}
		else if (num == 1){
			console.log(num + " is not a prime number!");
			return false
		}
		else if (num < 1){
			console.log("Please enter a positive number");
			return false
		}

		else if (num % 1 != 0){
			console.log("Please enter an integer");
			return false
		}
		else{
			console.log(num + " is a prime number!");
			counter = 0
			return true;
		}
	}

	isPrime("22")