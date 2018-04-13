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