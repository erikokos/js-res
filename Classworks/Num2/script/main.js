'use stritc';
var x1 = 1,
	y1 = 5,
	x2 = 1,
	y2 = 5,
	x3 = 2,
	y3 = 10;

var 
	sideA = (x1 > y1) ? x1 - y1 : y1 - x1;
	sideB = (x2 > y2) ? x2 - y2 : y2 - x2;
	sideC = (x3 > y3) ? x3 - y3 : y3 - x3;


Math.round(sideA);
Math.round(sideB);
Math.round(sideC);

console.log(sideA);
console.log(sideB);
console.log(sideC);


if (sideA > sideB && sideA > sideC) {
	var result1 = Math.pow(sideB, 2) + Math.pow(sideC, 2);
	Math.round(result1);
	(result1 === Math.pow(sideA, 2)) ? console.log('it is 90 deg triangle') :
										console.log('it is NOT 90 deg triangle');
}

if (sideB > sideC && sideB > sideA) {
	var result1 = Math.pow(sideA, 2) + Math.pow(sideC, 2);
	Math.round(result1);
	(result1 === Math.pow(sideB, 2)) ? console.log('it is 90 deg triangle') :
										console.log('it is NOT 90 deg triangle');
}

if (sideC > sideA && sideC > sideB) {
	var result1 = Math.pow(sideB, 2) + Math.pow(sideA, 2);
	console.log(result1);
	(result1 === Math.pow(sideC, 2)) ? console.log('it is 90 deg triangle') :
										console.log('it is NOT 90 deg triangle');
}