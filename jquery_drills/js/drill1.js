var oldHt = 500
var oldWd = 900;


var change = function(){
	var newHt = Math.random() * oldHt;
	var newWd = Math.random() * oldWd;
	$(".shape").fadeOut("slow")
	$(".shape").animate({
		"top": newHt,
		"left": newWd
	})
	$(".shape").fadeIn("slow")
	// console.log(oldHt);
	// console.log(oldWd);
	// console.log(newWd);
	// console.log(newHt);
	// console.log(pos)
	

}

$(function(){

$(".ball").on("click", change);

    console.log('The dom is ready! (drill 1)');


});
