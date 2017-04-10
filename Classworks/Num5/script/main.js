/*var objHuman =
{
	name: 'Ivan',
	lastName: 'Ivanov',
	age: '32',
	foto: 'foto.jpg',
	email: 'asas@mail.ru',
	homeCity: 'Sant-Petersburg'
};

var objWindow =
{
	height: '200px',
	width: '300px',
	title: 'Text window',
	charSet: 'utf-8'
};

var objMenu = 
{
	name: 'MAIN menu',
	items: 
	[
		{
			name: 'About us',
			url: 'about.html'
		},
		{
			name: 'Goods',
			url: 'goods.html'
		},
		{
			name: 'Basket',
			url: 'basket.html'
		}
	],
}

console.log('Menu objet has:');

for(var i in objMenu)
{
	if(typeof objMenu[i] == 'object' && objMenu[i].length >= 0)
	{
		console.log('Property ' + i + ' contain ');
		for(var j = 0; j < objMenu[i].length; j++)
		{
			console.log('Object # ' + j + ' contain ');
			for(var i1 in objMenu[i][j])
			{
				console.log('Property ' + i1 + ' contain ' + objMenu[i][j][i1]);
			}
		}
	}
	else
	{
		console.log('Property ' + i + ' contain ' + objMenu[i]);
	}
}*/