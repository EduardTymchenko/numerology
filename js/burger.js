(function($){
    $(function() {
      $('.menu__burger').on('click', function() {
          
        $(this).closest('.main-nav').toggleClass('menu_state_open');
      });
    });
  })(jQuery);