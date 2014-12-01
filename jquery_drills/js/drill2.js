$(function(){





    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){
    	var key = event.which
    //output to console which key was pressed
        console.log('The user pressed key: ',event.which);


// up
    	if (key === 38){
    		$('.shape').animate({
    			'top' : '-=30'
    		}, 'slow')
    	}
// right
    	else if(key === 39){
    		$('.shape').animate({
    			'right' : '-=30'
    		}, 'slow')
    	}
// left
    	else if(key === 37){
    		$('.shape').animate({
    			'right' : '-=30'
    		}, 'slow')
    	}
// down
    	else if(key === 40){
    		$('.shape').animate({
    			'right' : '-=30'
    		}, 'slow')
    	}


    }
)}
)
  
        
