var fibN = function (times){
	var first = 0;
	var second = 1;
	var num = 0;
	arr = [0,1];
	if(times > 1 && times % 1 == 0){
		for (var i = 2; i< times; i++){
			num = first + second;
			arr.push(num);
			first = second;
			second = num;
		}
	}
	else if (times == 1){
		arr.pop();
	}
	else if (times < 1){
		console.log("Please enter a positive number");
		return false
	}
	else{
		console.log("Please enter an integer");
		return false
	}

	console.log(arr);
}

fibN(10)