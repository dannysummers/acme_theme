/**
* @file
* Theme wide util functions.
*/
(function ($) {
  Drupal.behaviors.acmeThemeUtil = {
    attach: function (context, settings) {
      this.menuHide();
    },

    menuHide: function() {
      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`.
          $('#main-menu').fadeToggle('slow', 'linear');
        }
      });
    }
  };
})(jQuery);
