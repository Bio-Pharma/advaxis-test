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

   /*
    $('#top_input').keyup(function(){
        var val = $(this).val();
        if(val != ''){
            $(this).parent('.top-form').find('#top_link').removeAttr("disabled");
            $(this).parent('.top-form').find('#top_link').css("pointer-events","auto");
            //$("#login_btn").removeAttr("disabled");
            //$("#login_btn").css("pointer-events","auto");
        }
        else if(val == ''){
            $(this).parent('.top-form').find('#top_link').attr("disabled");
            $(this).parent('.top-form').find('#top_link').css("pointer-events","none");
            //$("#login_btn").attr("disabled");
            //$("#login_btn").css("pointer-events","none");

        }
    });
    */
