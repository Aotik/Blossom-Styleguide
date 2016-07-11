if (typeof(jQuery) == 'undefined') {
	console.log('Blossom did not detect jQuery. Include the src in your HTML.')
} else {
	$(function() {
		$('#app').on('click', '.view-source', function(e) {
			$(this).parents('.example').find('.module').toggleClass('invisible')
		})
	});
}
