let btnOpen = document.getElementById('open-btn'),
	nameInfo = document.getElementsByClassName('name-value')[0],
	budgetInfo = document.getElementsByClassName('budget-value')[0],
	goodsInfo = document.getElementsByClassName('goods-value')[0],
	itemsInfo = document.getElementsByClassName('items-value')[0],
	employersInfo = document.getElementsByClassName('employers-value')[0],
	discountInfo = document.getElementsByClassName('discount-value')[0],
	isopenInfo = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	budgetItem = document.querySelector('.count-budget-value'),
	timeItem = document.querySelector('.time-value'),
	chooseItem = document.querySelector('.choose-item'),
	employersItem = document.querySelectorAll('.hire-employers-item'),

	budget,
	open,
	shopGoods







btnOpen.addEventListener('click', () => {
	
	nameInfo.textContent = prompt("Название Вашего магазина?", "").toUpperCase();

	budget = prompt("Ваш бюджет?", "");
	while (isNaN(budget) || budget == "" || budget == null) {
		budget = prompt("Ваш бюджет?");
	}
	budgetInfo.textContent = budget;

});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50 ) {
			console.log('все отлично');
			mainList.shopGoods[i] = a;
			goodsInfo.textContent = mainList.shopGoods;
		} else {
			i = i - 1;
		}
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if (isNaN(items) && items != "") {
		mainList.chooseItemShopGoods = items.split(",")
		mainList.chooseItemShopGoods.sort();

		itemsInfo.textContent = mainList.chooseItemShopGoods;
	}
});

timeItem.addEventListener('change', () => {
	let time = timeItem.value

	if (time < 0) {
			console.log('Такого просто не может быть!');
			mainList.open = false;
			} else if (time > 8 && time < 20) {
				console.log('Время пахать');
				mainList.open = true;
				} else if (time < 24) {
					console.log('слишком поздно');
					mainList.open = false;
					} else if (time > 24) {
						console.log('В сутках всего 24 часа ');
						mainList.open = false;
						};

	if(mainList.open == true) {
		isopenInfo.style.backgroundColor = 'green'
		
	} else {
		isopenInfo.style.backgroundColor = 'red'
		};
});

budget_btn.addEventListener('click', () => {
	budgetItem.value = budget / 30
});

employers_btn.addEventListener('click', () => {
	for (let j = 0; j < employersItem.length; j++ ) {

		let employarName = employersItem[j].value;

		if ((typeof(employarName)) === 'string'  && employarName != '' && employarName.length < 50 ) {
			console.log('все отлично');
			mainList.employars[j] = employarName;

			employersInfo.textContent += mainList.employars[j] + ', ';

		}
	}
});

const mainList = {
	budget,
	shopName: "",
	shopGoods: [],
	employars: [],
	open: false,
	discount: true,
	chooseItemShopGoods: []
}