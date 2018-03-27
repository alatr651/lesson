var budget = prompt("Ваш бюджет?", "");
var shopName = prompt("Название Вашего магазина?", "");
var open = true 
var shopGoods = [];







mainList = {
	budget,
	shopName,
	shopGoods ,
	employers: {},
	open
}

for (let i = 0; i < 5; i++) {

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


/*var i = 0;

while (i < 5) {
	let a = prompt ("Какой тип товаров будем продавать?", "");
	i++

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
}*/

/*	var i = 0;
do {
	let a = prompt ("Какой тип товаров будем продавать?", "");
	i++

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
while (i < 5);*/






console.log(mainList);

alert("Ваш бюджет на один день состовляет " + budget / 30);