var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

var keys= Object.keys(obj)
// console.log(keys)
var values= []
keys.forEach(function(element, index){
	values.push(obj[keys[index]])
})
// console.log(values)


var zip = function (Array1, Array2) {
	var OtherArray = []
	Array1.forEach(function (element, index){
		var newArray = []
		newArray.push(Array1[index]);
		newArray.push(Array2[index]);
		OtherArray.push(newArray);
	});
	return OtherArray;
}

var zipped = zip(keys, values);
console.log(zipped);
