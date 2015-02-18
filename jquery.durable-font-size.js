// Durable Font Size - 1.0.0
// February 4, 2015
// The MIT License (MIT)
// Copyright (c) 2015 Dustin Dowell
// http://github.com/dustindowell22/durable-font-size
// =============================================


(function($) {
  $.fn.dfs = function(options) {

    // Store object
    var $this = $(this);

    // Settings
    var settings = $.extend({
      drag      : 32,
      precision : 'low',
      container : 'window',
      fontSize  : parseFloat($this.css('font-size'))
    }, options);

    // Changes font size based on container width
    function dfs() {
      var containerWidth = settings.container === 'window' ? $(window).width() :
                           settings.container === 'parent' ? parseFloat($this.parent().css('width')) : undefined,

          fontScale = settings.fontSize + (containerWidth / (settings.drag * settings.fontSize));

      // Font size settings
      $this.css('font-size', ((
        settings.precision === 'low'    ? fontScale :
        settings.precision === 'medium' ? Math.round(fontScale) :
        settings.precision === 'high'   ? Math.round(parseFloat(fontScale / settings.fontSize) * settings.fontSize) :
        settings.fontSize
      ) / 16) + 'rem');
    }

    // Execute during runtime
    dfs();

    // Execute on resize
    $(window).on('resize orientationchange', dfs);
  };
})(jQuery);
