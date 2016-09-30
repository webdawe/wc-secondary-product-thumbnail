jQuery(function($) {
  $('.products .wcspt-has-gallery').find('a:first').hover(
    function() {
      $(this).find('.secondary-thumb').stop(true, false).animate({ opacity:1 }, 300);
    }, function() {
      $(this).find('.secondary-thumb').animate({ opacity:0 }, 300);
    }
  );
});