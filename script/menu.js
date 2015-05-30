$(document).ready(function() {
  var menu = $('#menu');
  var menu_offset = menu.offset();
  // Cada vez que se haga scroll en la página se hara un chequeo del estado del menú y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > menu_offset.top) {
      menu.addClass('menu-fijo');
    } else {
      menu.removeClass('menu-fijo');
    }
  });
});
