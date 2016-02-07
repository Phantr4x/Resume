import $ from 'jquery';

export var ResumeAnimation = {
	init: function () {
		$('.mask').hide();
		$('section[data-name=home] .avatar').css('animation', 'drop-in 1.2s cubic-bezier(0.47, 0, 0.75, 0.72) 1.2s 1 alternate forwards');
		$('section[data-name=home] h1, section[data-name=home] p').css('animation', 'rip-in 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 1.2s 1 alternate forwards');
		$("a[href='#about']").click(function(event) {
			$('section[data-name=about] .console').css('animation', 'console-in 1.2s ease 120ms 1 alternate forwards');
		});
	}
};

module.exports = ResumeAnimation;

