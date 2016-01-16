$(document).ready(function() {
	/** -------- notification ------------ **/
	// $(".message.w").each(function() {
	// 	$(this).slideDown();
	// 	var _this = this;
	// 	$(_this).css("overflow", "visible");

	// 	setTimeout(function() {
	// 		$(_this).css("overflow", "visible");
	// 	}, 500);

	// 	var _w = $(this).parent().width() - 62;
	// 	$(this).css('width', _w +'px');
	// });

	// $(".message.w .close").on('click', function() {
	// 	var _t = this;
	// 	$(_t).css('transform', 'translateX( -100% ) rotateY( -180deg )');
	// 	setTimeout(function() {
	// 		$(_t).parent().css('transform', 'translateY(-100%) rotateX(-180deg)');
	// 		$(_t).parent().css('opacity', '0');	
	// 		setTimeout(function() {
	// 			$(_t).parent().slideUp();
	// 		}, 500);
	// 	}, 500);
	// });


	/** ------------ widget --------------- **/
	$("body").on('click', '.widget .header .close', function() {
		$(this).parent('.header').parent('.widget').slideUp();
	});

	$('.contextmenu .submenu._.next').on('click', function(e) {
		var item = $(this).attr('item');
		$(this).parent('.contextmenu').children('.sectionmenu[item="' +item +'"]').css('left', '0px');

		$(this).parent('.contextmenu').data('height', $(this).parent('.contextmenu').outerHeight());

		var height = $(this).parent('.contextmenu').children('.sectionmenu[item="' +item +'"]').outerHeight();
		var _this = this;
		setTimeout(function() {
			$(_this).parent('.contextmenu').css('height', height +'px');
		}, 500);

		e.stopPropagation();
		// if there is a not any pikaday associtated with it
		// do it
		// if (typeof $(this).data('associations') == 'undefined') {
		// 	$(this).data('associations', true);
		// 	try {
		// 		var target = $(this).parent('.contextmenu').children('.sectionmenu[item="' +item +'"]');
		// 		target = target.children('.custom').children('input.pikaday');

		// 		if (typeof target == 'undefined') return;
		// 		var picker = new Pikaday({
		// 	        field: target[0],
		// 	        firstDay: 1,
		// 	        format: 'D MMM YYYY',
		// 	        minDate: new Date(),
		// 	        maxDate: new Date(2020, 12, 31),
		// 	        yearRange: [2000,2020],
		// 	        container: target.parent('.custom').children('.calendarSpace')[0]
		// 	    });
		// 	} catch (ex) {
		// 		console.log('exception', ex);
		// 	}
		// }
	});

	$('.contextmenu  .sectionmenu .submenu._.prev').on('click', function(e) {
		$(this).parent('.sectionmenu').css('left', '300px');

		if (typeof ($(this).parent('.sectionmenu').parent('.contextmenu').data('height') != 'undefined')) {
			$(this).parent('.sectionmenu').parent('.contextmenu').css('height',
				$(this).parent('.sectionmenu').parent('.contextmenu').data('height'));
		}
		e.stopPropagation();
	});

});
