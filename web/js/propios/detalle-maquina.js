$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
});

$("#btnRegresar").on("click", function() {
    window.history.back();
});
    
$(".content-details-product").on("click", function(){
    $(this).removeClass("content-details-product");
});