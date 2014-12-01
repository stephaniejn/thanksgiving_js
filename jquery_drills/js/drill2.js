$(function(){

// var maxH = stage.height
// var maxW = stage.width



    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){

// up
    	if (event.keyCode === 38){
    		(".shape").animate({"top": "200"})
    	}
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
    });

});

