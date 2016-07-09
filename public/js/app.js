if (typeof(jQuery) == 'undefined') {
	console.log('Blossom did not detect jQuery. Include the src in your HTML.')
} else {
	$(function() {
		$('.dropElement').bind('click', function() {
			_this = $(this);
			if (!_this.hasClass('active')) {
				$('.dropElement').next('.dropElement-list').slideUp('fast')
				_this.next().slideDown('fast')
			}
		});
		$('#app').on('click', '.view-source', function(e) {
			$(this).parents('.example').find('.module').toggleClass('invisible')
		})
	});
}
