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