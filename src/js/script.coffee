console.log 'App started in "/* @echo ENV */" mode.'
$('.ellipse__button').on 'click', ->
	alert 'Button of the header ellipse was clicked!'

carousel = (element)->
	element.addClass('owl-carousel')
	element.addClass('owl-theme')
	element.owlCarousel({
		nav: false,
		loop: true,
		items: 1,
		touchDrag: false,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true
	})

# In start
if $(window).width() < 768
	carousel $('.main__sections')
# In resize
$(window).resize ->
	if $(window).width() >= 768
		# If is not mobile version
		location.reload()
	else
		# If is mobile version
		carousel $('.main__sections')
