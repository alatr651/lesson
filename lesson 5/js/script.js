let	body = document.getElementById('body'),
	newLi = document.createElement('li'),
	newTitle = document.createElement('div')

body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);

menu.insertBefore(menu.children[2], menu.children[1]);

newTitle.classList.add('title');
newTitle.textContent = 'Мы продаем только подлинную технику Apple';
column_2.replaceChild(newTitle, column_2.children[0]);

adv.remove();

var feedback = prompt('Какое Ваше отношение к технике apple', "");
feedback__board.appendChild(document.createTextNode(feedback));







