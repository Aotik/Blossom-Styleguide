if (typeof(jQuery) == 'undefined') {
	console.log('App.js did not detect jQuery.')
} else {
	$(() => {
		$('#app').on('click', '.view-source', function(e) {
			const _parent = $(this).parents('.example')
			_parent.toggleClass('showing')
			_parent.find('.note').eq(0).toggleClass('hidden')
			_parent.find('.module').eq(0).toggleClass('collapsed')
		})
	})
}
