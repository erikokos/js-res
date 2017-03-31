var month = parseInt(prompt('Enter number of month'));

(month >= 3 && month <= 5) ? console.log('Spring') : 
	(month >= 5 && month <= 9) ? console.log('Summer') :
		(month >= 9 && month <= 11) ? console.log('Autumn') :
			(month == 12 || month == 1 || month == 2) ? console.log('Winter') :
			 	console.log('Not number of month');