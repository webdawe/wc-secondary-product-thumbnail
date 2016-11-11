jQuery(function($) {
  'use strict';
  
  var $wcsptProducts = $('.products .wcspt-has-gallery');
  
  if ($wcsptProducts.length) {
    var s = (document.body || document.documentElement).style;
    var transitionsSupported = 'transition' in s || 'WebkitTransition' in s || 'MozTransition' in s || 'OTransition' in s;
    
    if (transitionsSupported) {
      $wcsptProducts.closest('.products').addClass('wcspt-products');
      $wcsptProducts.find('a:first').addClass('wcspt-img-link');
      
    // Support: IE <=9 and other legacy browsers
    } else {
      $wcsptProducts.find('.secondary-thumb').css({ opacity: 0, transition: 'none' })
        .removeClass('wcspt-transition');
      
      $wcsptProducts.find('a:first').hover(
        function() {
          $(this).find('.secondary-thumb').stop(true, false).animate({ opacity: 1 }, 300);
        }, function() {
          $(this).find('.secondary-thumb').animate({ opacity: 0 }, 300);
        }
      );
    }
  }

});