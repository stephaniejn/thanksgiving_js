
var change = function(){
	var newHt = (Math.random() * ($(".stage").height() - $(".shape").height()))
	var newWd = (Math.random() * ($(".stage").width() - $(".shape").width()))
	$(".shape").fadeOut("slow")
	$(".shape").animate({
		"top": newHt,
		"left": newWd
	})
	$(".shape").fadeIn("slow")

}

$(function(){

	$(".ball").on("click", change);

	console.log('The dom is ready! (drill 1)');


});
