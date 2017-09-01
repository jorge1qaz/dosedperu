$(document).ready(function() {
    $(".collection-item").on("mouseover", function() {
        $(this).removeClass("indigo darken-1");
        $(this).addClass("grey darken-2 cursor-pointer");

    });
    $(".collection-item").on("mouseleave", function() {
        $(this).removeClass("grey darken-2 cursor-pointer");
        $(this).addClass("indigo darken-1");
    });

    $('select').material_select();
    $(".table-list tr").on("click", function() {
        var nombreSeleccion = " Densidad máxima teórica (Rice)";
        Materialize.toast('Has selecionado: ' + nombreSeleccion, 4000);
    });
    //Paginador
    var cantFilas =  $(".table-list tbody > tr").length;
    var filas = $(".table-list tbody > tr");
    var $pag1 = $("#pag1");
    var $pag2 = $("#pag2");
    var $pag3 = $("#pag3");
    var $pag4 = $("#pag4");
    var $pag5 = $("#pag5");
    var $pag6 = $("#pag6");
    $pag2.hide();
    $pag3.hide();
    $pag4.hide();
    $pag5.hide();
    $pag6.hide();
    //||
    if (cantFilas >= 5 && cantFilas < 11) {
        $pag2.show();
    } else if (cantFilas >= 11 && cantFilas < 16) {
        $pag2.show();
        $pag3.show();
    } else if (cantFilas >= 16 && cantFilas < 21) {
        $pag2.show();
        $pag3.show();
        $pag4.show();
    } else if (cantFilas >= 21 && cantFilas < 26) {
        $pag2.show();
        $pag3.show();
        $pag4.show();
        $pag5.show();
    } else if (cantFilas >= 26 && cantFilas < 31) {
        $pag2.show();
        $pag3.show();
        $pag4.show();
        $pag5.show();
        $pag6.show();
    }
    function cargar() {
        borraFilas();
        var i = 0;
        while (i < 5) {
            $(filas).eq(i).show(); 
            i++;
        }
    };
    cargar();
    //Ocultar filas de la tabla
    function borraFilas(){
        filas.hide();
    };
    function quitarMarcador() {
        $("ul.pagination li").removeClass("active blue");
    }
    //Mostrar contenido por página
    $pag1.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
            
        var i = 0;
        borraFilas();
        while (i < 5) {
            $(filas).eq(i).show();
            i++;
        }
    });
    $pag2.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
        var i = 5;
        borraFilas();
        while (i < 10) {
            $(filas).eq(i).show();
            i++;
        }
    });
    $pag3.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
        var i = 10;
        borraFilas();
        while (i < 15) {
            $(filas).eq(i).show();
            i++;
        }
    });
    $pag4.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
        var i = 15;
        borraFilas();
        while (i < 20) {
            $(filas).eq(i).show();
            i++;
        }
    });
    $pag5.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
        var i = 20;
        borraFilas();
        while (i < 25) {
            $(filas).eq(i).show();
            i++;
        }
    });
    $pag6.on("click", function() {
        quitarMarcador();
        $(this).addClass("active blue");
        var i = 25;
        borraFilas();
        while (i < 30) {
            $(filas).eq(i).show();
            i++;
        }
    });
});