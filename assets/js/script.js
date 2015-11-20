jQuery(document).ready(function($) {
  $('.products .wcspt-has-gallery').find('a:first').hover(function(e) {
    if (e.type === 'mouseenter') {
      $(this).find('.secondary-thumb').stop(true, false).animate({ opacity:1 }, 300);
    } else if (e.type === 'mouseleave') {
      $(this).find('.secondary-thumb').animate({ opacity:0 }, 300);
    }
  });
});