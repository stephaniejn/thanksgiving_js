var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

var pluck = function (someArray, someKey){
	var newArray = someArray.map(function (currentValue){
		// return currentValue[someKey];

	});
	return newArray
};


var plucked = pluck(albums, "artist");
console.log(plucked);