$(document).ready(function(){
   $("#mybtn").on("click", function(){
        read();
   });

   $(".replay").click(function(){
    $(this).parents("div.row").next("div.card").toggle();
   });

});


function read(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btntext = document.getElementById("mybtn");
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = " Show More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btntext.innerHTML = " Show Less";
        moreText.style.display = "inline";
    }
}