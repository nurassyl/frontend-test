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
		touchDrag: true,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	})

element = carousel $('.main__sections')
if $(window).width() < 768
	carousel element
$(window).resize ->
	if window.matchMedia('(max-width: 768px)').matches
		carousel element
	else
		element.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme owl-loaded')
