if '/* @echo ENV */' == 'development'
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

isMobile = -> window.matchMedia('(max-width: 768px)').matches
owl = null
element = $('.main__sections')
if isMobile()
	owl = carousel element
$(window).resize ->
	if isMobile()
		owl = carousel element
	else
		if owl != null
			owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme owl-loaded')
