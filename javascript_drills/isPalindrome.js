var is_palindrome = function (string){
	for(var i = 0; i<Math.ceil(string.length / 2); i++){
		if (string.charAt(i) != string.charAt(string.length -1 -i))
		{
			console.log("Not palindrome!");
			return false
		}
		else{
			console.log("I'm a palindrome!");
			return true
		}
	}}

is_palindrome("hello")
is_palindrome("racecar")