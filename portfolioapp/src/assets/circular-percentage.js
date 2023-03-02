/*función que permite animar los circulos porcentuales */
$(window).on('load',function () {
    var element1 = $(".circulo");
    var element2 = $(".puntito");
    var element3 = $(".valor-porcentual");

    $(window).scroll(function () {
      if($(window).scrollTop() > 0) {
        element1.addClass("animame");
        element2.addClass("animame");
        element3.addClass("animame");
      }else {
        element1.removeClass("animame");
        element2.removeClass("animame");
        element3.removeClass("animame");
      }

    });


  });
