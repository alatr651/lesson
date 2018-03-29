var budget
var shopName
var time
var open = true 
var shopGoods = [];
var price = 100;


function start () {
	budget = prompt("Ваш бюджет?");

	while (isNaN(budget) || budget == "" || budget == null) {
		budget = prompt("Ваш бюджет?");
	}

	shopName = prompt("Название Вашего магазина?").toUpperCase();
	time = 110;
}

start();

mainList = {
	budget,
	shopName,
	shopGoods ,
	employers: {},
	open,
	discount: true
}

function chooseGoods () {

	for (let i = 0; i < 2; i++) {

		let a = prompt ("Какой тип товаров будем продавать?", "");
		

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
			console.log('все отлично');
			mainList.shopGoods[i] = a;
		} else {

			if (a == '') {
				let b = confirm("Вы точно желаете оставить это поле пустым?");
				if (b) {
					mainList.shopGoods[i] = '';
				} else {
					i--;
					alert("Введите еще раз товар, который вы хотите продавать");
				}
			}
		}
	}
}

chooseGoods();

function chooseEmployers () {
	for (let j = 0; j < 4; j++ ) {
		let employarName = prompt ("Введите Ваше имя", "");

		if ((typeof(employarName)) === 'string' && (typeof(employarName)) !== null && employarName != '' && employarName.length < 50 ) {
			console.log('все cjnhelybrb');
			mainList.employers[j] = [j] + '-' + employarName;
		} else {

			if (employarName == '') {
				let d = confirm("Вы точно желаете оставить это поле пустым?");
				if (d) {
					mainList.employers[j] = '';
				} else {
					j--;
					alert("Введите еще раз номер и имя");
				}
			}
		}

	}
}

chooseEmployers();

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время пахать');
			} else if (time < 24) {
				console.log('слишком поздно');
				} else if (time > 24) {
					console.log('В сутках всего 24 часа ');
					};
}
workTime(time);






console.log(mainList);

function dayBadget(budget) {

alert("Ваш бюджет на один день состовляет " + budget / 30);
}

dayBadget(budget);

function discountSystem() {
	if (mainList.discount == true) {
		price = (price/100)*80;
	console.log(price);
	}

}

discountSystem();