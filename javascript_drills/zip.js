var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];


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

var zipped = zip(artists, albums);
console.log(zipped);
// console.log(zip(artists,albums))