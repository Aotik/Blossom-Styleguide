if (typeof(jQuery) == 'undefined') {
	console.log('App.js did not detect jQuery.')
} else {
	$(function() {
		$('#app').on('click', '.view-source', function(e) {
			$(this).parents('.example').toggleClass('showing')
			$(this).parents('.example').find('.note').toggleClass('hidden')
			$(this).parents('.example').find('.module').toggleClass('collapsed')
		})
	});
}
