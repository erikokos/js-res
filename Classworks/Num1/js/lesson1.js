var a1 = 2,
	a2 = 0,
	a3 = -4;

(a1 == 0) ? res1 = a1 : (a1 > 0) ? res1 = a1 * a1 : res1 = a1 * a1 * a1;
(a2 == 0) ? res2 = a2 : (a2 > 0) ? res2 = a2 * a2 : res2 = a2 * a2 * a2;
(a3 == 0) ? res3 = a3 : (a3 > 0) ? res3 = a3 * a3 : res3 = a3 * a3 * a3;
console.log(res1);
console.log(res2);
console.log(res3);