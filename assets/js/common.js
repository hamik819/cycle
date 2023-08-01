var Lookcycle = window.Lookcycle || {};
Lookcycle = (function($) {
	'use strict';
	var common = {
		headerMotion: function(){
            $(window).scroll(function(){
                const curr = $(this).scrollTop();
                if(curr > 0){
                    $('.header').addClass('hide');
                } else {
                    $('.header').removeClass('hide');
                }
            });
        },
		init: function() {
			// common.headerMotion();
		}
	};
	$(document).ready(function() {
		common.init();
	});
})($);
