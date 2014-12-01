
var isPrime = function(num){
	var counter = 0
	for (var i = 0; i<=num; i++){
		if (num % i == 0){
			counter = counter + i;
		}}

		if(counter > i){
			counter = 0
			return false;
		}
		else if (num == 1){
			return false
		}
		else{
			counter = 0;
			return true
		}
	}

var printPrime = function(num){
	var primes=[]
	for (var i=2; i<= num; i++){
		if(isPrime(i) == true ){
			primes.push(i);
		}
	}
	console.log(primes)
}

printPrime("22")



