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