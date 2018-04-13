function slider() {
	//slider

	let sliderIndex = 1;
		slides = document.getElementsByClassName('slider-item');
		prev = document.querySelector('.prev');
		next = document.querySelector('.next');
		dotWrap = document.querySelector('.slider-dots');
		dot = document.getElementsByClassName('dot')

		showSlides(sliderIndex);

		function showSlides(n) {

			if(n > slides.length) {
				sliderIndex = 1;
			};

			if(n < 1) {
				sliderIndex = sliderIndex.length;
			};

			for (var i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none'
			};

			for (var i = 0; i < dot.length; i++) {
				dot[i].classList.remove('dot-active');
			};

			slides[sliderIndex - 1].style.display = 'block';
			dot[sliderIndex - 1].classList.add('dot-active');

		}

		function plusSlides(n) {
			showSlides(sliderIndex += n)
		}

		function currentSlides(n) {
			showSlides(sliderIndex = n)
		}

		prev.addEventListener('click', function(){
			plusSlides(-1)
		});

		next.addEventListener('click', function(){
			plusSlides(1)
		});

		dotWrap.addEventListener('click', function(event) {
			for (var i = 0; i < dot.length + 1; i++) {
				if(event.target.classList.contains('dot') && event.target == dot[i - 1]) {
					currentSlides(i);
				}
			}
		});

}

module.exports = slider;