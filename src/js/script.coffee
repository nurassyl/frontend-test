console.log 'App started in "/* @echo ENV */" mode.'
$('.ellipse__button').on 'click', ->
	alert 'Button of the header ellipse was clicked!'

carousel = (element)->
	if $(window).width() <= 767
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

carousel $('.main__sections')
if '/* @echo ENV */' == 'production'
	$(window).resize ->
		location.reload()
