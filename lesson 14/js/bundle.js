(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calc() {
	//calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalVaule = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0

		totalVaule.innerHTML = 0

		persons.addEventListener('change', function() {
			personsSum = +this.value
			total = (daysSum + personsSum) * 4000;
			if(restDays.value == '') {
				totalVaule.innerHTML = 0;
			} else {
				totalVaule.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function() {
			daysSum = +this.value
			total = (daysSum + personsSum) * 4000;
			if(persons.value == '') {
				totalVaule.innerHTML = 0;
			} else {
				totalVaule.innerHTML = total;
			}
		});

		place.addEventListener('change', function() {
			if(restDays.value == '' || persons.value == '') {
				totalVaule.innerHTML = 0
			} else {
				let a = total
				totalVaule.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
}

module.exports = calc;
},{}],2:[function(require,module,exports){
function form() {
	//form

	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Ожидайте за Вами выехали";
		message.error = "Эупс... что-то пошло не так...";


	let form = document.getElementsByClassName('main-form')[0];
		input = form.getElementsByTagName('input');
		statusMessage = document.createElement('div');


	form.addEventListener('submit', function(event){
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX

		let request = new XMLHttpRequest();

		request.open("POST", 'server.php')

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 ){
				if(request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.error;
				}
			}
		}

		for (var i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});




	let formFotter = document.getElementById('form');
		inputFotter = formFotter.getElementsByTagName('input');
		statusMessage = document.createElement('div');


	formFotter.addEventListener('submit', function(event){
		event.preventDefault();
		formFotter.appendChild(statusMessage);

		//AJAX

		let request = new XMLHttpRequest();

		request.open("POST", 'server.php')

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		let formData = new FormData(formFotter);

		request.send(formData);

		request.onreadystatechange = function() {
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 ){
				if(request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.error;
				}
			}
		}

		for (var i = 0; i < inputFotter.length; i++) {
			inputFotter[i].value = '';
		}
	});
}

module.exports = form;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab');


		info = document.getElementsByClassName('info-header')[0];
		tabContent = document.getElementsByClassName('info-tabcontent')


		function hideTabContent (a) {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');

			}
		}

		hideTabContent(1)

		function showTabContent(b) {
			if(tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}

		info.addEventListener('click', function(event) {
			let target = event.target;
			if(target.className == 'info-header-tab') {
				for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						showTabContent(i);
						break;
					}
				}
			}
		});
}

module.exports = tab;
},{}],5:[function(require,module,exports){
function timer () {
	// timer

	let deadline = '9999-04-06';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			minutes = timer.querySelector('.minutes'),
			hours = timer.querySelector('.hours'),
			seconds = timer.querySelector('.seconds')

			function updateClock() {
				let t = getTimeRemaining(endtime);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0 ) {
					clearInterval(timeInterval);
				}
			};
			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
			
	};

	setClock('timer', deadline);

	let overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		more = document.querySelector('.more'),
		moreTab = document.getElementsByClassName('description-btn')

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden'
		});

		

		close.addEventListener('click', function() {
			close.classList.remove('more-splash');
			overlay.style.display = 'none';
			document.body.style.overflow = ''

		});



		for (var i = 0; i < moreTab.length; i++) {
			moreTab[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden'
			});
		}
}

module.exports = timer;
},{}],6:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){

let slider = require('./mod/slider.js');
let calc = require('./mod/calc.js');
let tab = require('./mod/tab.js');
let form = require('./mod/form.js');
let timer = require('./mod/timer.js');

calc();
form();
tab();
slider();
timer();

});



},{"./mod/calc.js":1,"./mod/form.js":2,"./mod/slider.js":3,"./mod/tab.js":4,"./mod/timer.js":5}]},{},[6]);
