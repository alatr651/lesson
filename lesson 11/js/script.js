window.addEventListener('DOMContentLoaded', function(){

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
	})


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




});


