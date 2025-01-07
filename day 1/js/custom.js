$(document).ready(function(){
    //hide the div
    $("#hideBtn").click(function(){
        $("div").hide();
    });

    //show the div with Slide
    $("#slideBtn").click(function(){
        $("div").slideDown();
    });

    // toggle the div with fade
    $("#toggleBtn").click(function(){
        $("div").fadeToggle();
    });

    //animate div dimenions with mouse hover
    $("div").mouseenter(function(){
        $("div").animate({
            fontSize:"3em",
            height:"100px",
            opacity:"0.5"
        },1000);
    });

    //reset div dimention on mouse out
    $("div").mouseleave(function(){
        $("div").animate({
            fontSize:"1em",
            height:"20px",
            opacity:"1"
        });
    });

});