// 

$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(){
       
        $('#wrap').toggleClass("toggled")
    });
  
    $(".search-icon").click(function(){
        $(".search-input").slideToggle();
        console.log("show");
      });

});

