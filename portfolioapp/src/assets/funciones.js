/*Función del botón para 'volver arriba'*/
$(function(){
    let toTop = $(".to-top");

    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 100) {
        toTop.addClass("active");
      } else {
        toTop.removeClass("active");
      }
    }

    );
  });

//=======================================================
/*función que permite animar los circulos porcentuales */
$(window).on('load',function () {
  let element1 = $(".circulo");
  let element2 = $(".puntito");
  let element3 = $(".valor-porcentual");

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
//=======================================================
/*funcion que setea un select con valores del 1 al 100*/
$(function(){
  let $select = $(".1-100");
  for (i=1;i<=100;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});
