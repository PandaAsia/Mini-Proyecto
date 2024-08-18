document.addEventListener('DOMContentLoaded', ()=>{
	const elementosCarrusel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarrusel, {
		duration: 180,
		dist: -80,
		shift: 5,
		padding: 5,
		numVisible: 3,
		noWrap: false,
	});
});