//  ***********************
//  $$ Smart resize
//  ***********************
(function ($, sr) {
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this,
				args = arguments;
			function delayed() {
				if (!execAsap) {
					func.apply(obj, args);
				}
				timeout = null;
			}
			if (timeout) {
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold || 200);
		};
	};
	jQuery.fn[sr] = function (fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};
})(jQuery, 'smartresize'); // End smartresize
var gblSearch = $('.fs-gbl-search');
var memberMenu = $('ul.member');
$(window).smartresize(function () {
	window.newWindowWidth = window.innerWidth;
	window.newWindowHeight = window.innerHeight;

	var newWindowWidthResult = newWindowWidth * 0.66;
	 
	window.windowWidth = window.innerWidth;
	window.windowHeight = window.innerHeight;
	if (Foundation.MediaQuery.atLeast('medium')) {
		gblSearch.on().appendTo('.gbl-search');
		$('.nav').css('height', 'auto');
		if ( $( ".callout" ).length) {
			$('.figure').matchHeight({
			    target: $('.message')
			});
		}
		if ( memberMenu.length) {
			memberMenu.on().insertAfter('.global');
			$('.mem-item').removeClass('active');
		}
	}
	if (!Foundation.MediaQuery.atLeast('medium')) {
		gblSearch.on().appendTo('.utility');
		$('.nav').css('height', windowHeight);
		if ( $( ".callout" ).length) {
			$('.figure').css('height', 'auto');
		}
		if ( memberMenu.length) {
			memberMenu.on().insertBefore('.global');
		}
	}
});