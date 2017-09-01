$(function(){
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
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
        $(this).hide();
        $PDFselected.hide();
        $PDFhover.show()
        .css('cursor','pointer')
        .on("click", function() {
            $(this).hide();
            $PDFhover.hide();
            $PDFselected.show();
        })
        .on("mouseleave", function() {
            $(this).hide();
            $PDFselected.hide();
            $imgPDF.show();
        });
    });

    var $block_1 = $("#block_1");
    var $block_2 = $("#block_2");
    var $block_3 = $("#block_3");
    var $block_4 = $("#block_4");
    var $block_5 = $("#block_5");
    var $block_6 = $("#block_6");

    $block_1.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/consultoria.png");
    });
    $block_2.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/laboratorio2.png");
    });
    $block_3.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/topografia2.png");
    });
    $block_4.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/cielo2.png");
    });
    $block_5.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/construcion.png");
    });
    $block_6.on("click", function() {
        $(this).attr("src", "../images/servicios/1200px/puente.png");
    });
});
