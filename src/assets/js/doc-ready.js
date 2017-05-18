
//  ***********************
//  $$ Document ready
//  ***********************
(function($) {
  $(document).foundation();

  $(function() {

    if (window.feDebug === true) {
      domain = 'http://set-test-domain';
    } else {
      domain = '';
    }
    
    $.ajaxSetup({
      cache: false
    });

    //window resize using foundation media query check - also check resize event functions
    $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
      // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
      if (newSize !== 'small') {
        console.log('size:' + newSize);
      }
      else {
        console.log('size:' + newSize);
      }
    });
    //page load in at least medium
    if (Foundation.MediaQuery.atLeast('medium')) {

    }
    //page load in small
    if (!Foundation.MediaQuery.atLeast('medium')) {

    }    
  });

})(jQuery);