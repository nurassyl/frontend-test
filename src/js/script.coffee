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

isMobile = window.matchMedia('(max-width: 768px)').matches
element = $('.main__sections')
if isMobile
	carousel element
$(window).resize ->
	if isMobile
		carousel element
	else
		element.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme owl-loaded')
