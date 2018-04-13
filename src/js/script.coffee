console.log 'App started in "/* @echo ENV */" mode.'
$('.ellipse__button').on 'click', ->
	alert 'Button of the header ellipse was clicked!'

carousel = (element)->
	if $(window).width() <= 1000
		element.addClass('owl-carousel')
		element.addClass('owl-theme')
		element.owlCarousel({
			nav: true,
			loop: true,
			items: 1
		})

carousel $('.main__sections')
$(window).resize ->
	location.reload()
