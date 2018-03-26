var budget = prompt("Ваш бюджет?", "");
var shopName = prompt("Название Вашего магазина?", "");
var open = true 
var shopGoods = [];
shopGoods [0] = prompt ("Какой тип товаров будем продавать?", "");
shopGoods [1] = prompt ("Какой тип товаров будем продавать?", "");
shopGoods [2] = prompt ("Какой тип товаров будем продавать?", "");

mainList = {
	budget,
	shopName,
	shopGoods ,
	employers: {
		name: "Ivan"
	},
	open
}

console.log(mainList);

alert("Ваш бюджет на один день состовляет " + budget);