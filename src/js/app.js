if (typeof(jQuery) == 'undefined') {
  console.log('App.js did not detect jQuery.')
} else {
  var isOpenResources = false

  function openResources() {
    isOpenResources = true
    $("aside ul li").show()
  }

  function closeResources() {
    isOpenResources = false
    $("aside li").hide()
  }

  $(function() {
    $('#app').on('click', '#replay_landing', function(e) {
      $('.landing .square').each(function(i, obj) {
        $(obj).attr("class", "square")
        setTimeout(function() {
          $(obj).addClass("square landing-" + $(obj).attr('data-landing'))
        }, 100)
      })
    }).on('click', 'header .toggle i', function(e) {
      e.preventDefault()
      console.log('sd');
      const _this = $(this)
      if (!_this.parents('header').hasClass('open')) {
        $('header .links').slideDown(100, function(e) {
          _this.parents('header').addClass('open')
        })
      } else {
        $('header .links').slideUp(100, function() {
          _this.parents('header').removeClass('open')
        })
      }
    }).on('click', 'header.open a', function(e) {
      $('header .links').slideUp(100, function() {
        $('header').removeClass('open')
      })
    }).on('click', 'a.resources', function(e) {
      e.preventDefault()
      if (isOpenResources) return closeResources()
      openResources()
    }).on('click', 'aside ul a', function(e) {
      if (isOpenResources) return closeResources()
    })
  })
}
