$(function(){
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    // $("##btnBloque1Consultoria").click(function(){
    //     window.location.href = "../html/servicios.html";
    // });
    $("#btnBloque1Servicios").click(function(){
        window.location.href = "../html/servicios.html";
    });
    $("#btnBloque1Cotizador").click(function(){
        window.location.href = "../html/cotizador.html";
    });
    $("#btnBloque1Ubicacion").click(function(){
        window.location.href = "../html/ubicanos.html";
    });
    $("#btnBloque1Contacto").click(function(){
        window.location.href = "../html/contacto.html";
    });
    var $imgPDF = $("#imgPDF");
    var $PDFhover = $("#PDFhover");
    var $PDFselected = $("#PDFselected");
    
    $PDFhover.hide();
    $PDFselected.hide();

    $imgPDF.on("mouseenter", function() {
        $(this).css('cursor','pointer')
    });
    //mobile
    $imgPDF.on("click", function() {
        window.open("../docs/Brochure_DOSED_VL.pdf");
        //window.location.href = "../docs/Brochure_DOSED_VL.pdf";
    });
    $("#imgEXCEL").on("click", function() {
        //window.location.href = "../docs/Ensayos_en_agregados.pdf";
        window.open("../docs/Ensayos_en_agregados.pdf");
    });

    $("#imgEXCEL").on("mouseenter", function() {
        $(this).css('cursor','pointer');
    });

    var $block_1 = $("#block_1");
    var $block_2 = $("#block_2");
    var $block_3 = $("#block_3");
    var $block_4 = $("#block_4");
    var $block_5 = $("#block_5");
    var $block_6 = $("#block_6");

    $block_1.on("click", function() {
        $(this).attr("src", "../images/web/1200px/consultoria.png");
    });
    $block_2.on("click", function() {
        $(this).attr("src", "../images/web/1200px/laboratorio2.png");
    });
    $block_3.on("click", function() {
        $(this).attr("src", "../images/web/1200px/topografia2.png");
    });
    $block_4.on("click", function() {
        $(this).attr("src", "../images/web/1200px/cielo2.png");
    });
    $block_5.on("click", function() {
        $(this).attr("src", "../images/web/1200px/construcion.png");
    });
    $block_6.on("click", function() {
        $(this).attr("src", "../images/web/1200px/puente.png");
    });
});