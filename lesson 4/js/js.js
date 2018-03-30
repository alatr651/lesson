var budget,
	shopName,
	time,
	open,
	shopGoods,
	price = 100;
	time = 10;


mainList = {
	budget,
	shopName: "",
	shopGoods: [],
	employars: {},
	open: false,
	discount: true,
	chooseItemShopGoods: [],
	start: function start () {
		shopName = prompt("Название Вашего магазина?", "").toUpperCase();
		mainList.budget = prompt("Ваш бюджет?", "");

		while (isNaN(budget) || budget == "" || budget == null) {
			mainList.budget = prompt("Ваш бюджет?");
		}	
	},
	chooseGoods: function chooseGoods () {
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
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть!');
			} else if (time > 8 && time < 20) {
				console.log('Время пахать');
				mainList.open = true;
				} else if (time < 24) {
					console.log('слишком поздно');
					} else if (time > 24) {
						console.log('В сутках всего 24 часа ');
						};
	},
	dayBadget: function dayBadget(budget) {
		alert("Ваш бюджет на один день состовляет " + budget / 30);
	},
	chooseEmployars: function chooseEmployars () {

		for (let j = 1; j < 4; j++ ) {

			let employarName = prompt ("Введите Ваше имя", "");

			if ((typeof(employarName)) === 'string' && (typeof(employarName)) !== null && employarName != '' && employarName.length < 50 ) {
				console.log('все отлично');
				mainList.employars[j] = j + '-' + employarName;
			} else {

				if (employarName == '') {
					let d = confirm("Вы точно желаете оставить это поле пустым?");
					if (d) {
						mainList.employars[j] = '';
					} else {
						j--;
						alert("Введите еще раз номер и имя");
					}
				}
			}

		}
	},
	discountSystem: function discountSystem() {
		if (mainList.discount) {
			price = (price/100)*80;
			console.log(price);
		}

	},
	chooseItemShopGoods: function chooseItemShopGoods() {
		let items = prompt("Перечислете через запятую товары", "");

		while (!isNaN(items) || items == "" || items === null) {
			items = prompt("Перечислете через запятую товары", "");
		}
		mainList.chooseItemShopGoods = items.split(",")
		mainList.chooseItemShopGoods.push(prompt("может добавите еще что-то",""));
		mainList.chooseItemShopGoods.sort();

		mainList.chooseItemShopGoods.forEach( function(item, i){
			console.log((i+1) + " " + item);
			alert("У нас вы можете купить: " + (i+1) + ": "+ item);
		});

		for( var porp in mainList) {
			console.log("Наш магазин включает: " + porp);
		}
	}




}



console.log(mainList);


