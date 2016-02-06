import $ from 'jquery';
export var ResumeShake = {
	init: function (className) {
		var el = $('.' + className);
		this.eventInit(el);
	},
	eventInit: function (el) {
		$(document).mousemove(function(e) {
			var x_offset = e.pageX - $(document).width()/2;
			var y_offset = e.pageY - $(document).height()/2;
			el.each(function( index ) {
				$(this).css('top', y_offset / parseFloat($(this).attr('data-move')));
				$(this).css('left', x_offset / parseFloat($(this).attr('data-move')));
			});
		});
	},
};
module.exports = ResumeShake;
