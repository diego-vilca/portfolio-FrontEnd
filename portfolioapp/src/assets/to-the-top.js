/*Función del botón para 'volver arriba'*/
$(function(){
    var toTop = $(".to-top");

    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 100) {
        toTop.addClass("active");
      } else {
        toTop.removeClass("active");
      }
    }

    );
  });
