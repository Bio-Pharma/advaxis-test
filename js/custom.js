	/*Menu-toggle*/
    /*$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        //alert(1);
    });*/


    $(window).load(function(){
    	if($(window).width() < 768){
	    	$('#wrapper').removeClass('active');
	    }
    });
