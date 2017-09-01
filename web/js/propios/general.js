$(document).ready(function(){

    $(".button-collapse").sideNav();
    $("#imgLogo").on("click", function() {
        window.location.href = "../html/home.html";
    });
    $("#imgLogo").mouseenter(function() {
        $(this).css("cursor","pointer");
        //alert("raios");
    });
});