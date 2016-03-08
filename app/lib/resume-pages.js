import $ from 'jquery';
export var ResumePages = {
	init: function () {
		this.pageMoves('nav', 'main');
		this.indicatorMoves('indicator');
	},
	pageMoves: function (navName, mainName) {
		var that = this;

		that.nav = $('#' + navName);
		that.main = $('#' + mainName);
		that.a = $("a[href^='#']");
		that.width = $(document.body).width();

		that.a.bind('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			var name = $(this).attr('href').slice(1);
			var i = that.main.children('section[data-name=' + name + ']').index();
			that.main.css('transform', 'translate3d(-' + i + '00%, 0px, 0px)');
		});
	},
	indicatorMoves: function (indicatorName) {
		var that = this;

		that.indicator = $('.' + indicatorName);
		that.a = $('.tags').children('a');

		that.a.bind('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			var w = $(this)[0].offsetWidth;
			// console.log(w)
			var wArr = [];
			$(this).addClass('active').siblings().removeClass('active');
			$(this).nextAll('a').each(function(i, el) {
				wArr.push($(this)[0].offsetWidth);
			});
			// console.log(wArr)
			var arrSum = parseInt($('#nav').css('padding-right').slice(0, -2), 10);
			for (var i = 0; i < wArr.length; i++) {
				arrSum += wArr[i];
			};
			// console.log(arrSum)
			that.indicator.css({
				width: w + 'px',
				right: arrSum + 'px'
			});
		});
	}
}

module.exports = ResumePages;