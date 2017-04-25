;(function(){
	'use strict';
// 	function svetofor()
// 	{
// /*--------------------------------------------------------------------*/
// 		var col1 = document.getElementById('red');
// 		var style1 = window.getComputedStyle(col1).backgroundColor;
// /*--------------------------------------------------------------------*/
// 		var col2 = document.getElementById('yellow');
// 		var style2 = window.getComputedStyle(col2).backgroundColor;
// /*--------------------------------------------------------------------*/
// 		var col3 = document.getElementById('green');
// 		var style3 = window.getComputedStyle(col3).backgroundColor;
// /*--------------------------------------------------------------------*/
// 		if(style1 === 'rgb(128, 128, 128)')
// 		{
// 			col1.style.backgroundColor = 'rgb(255,0,0)'
// 		}
// 		else if (style1 === 'rgb(255,0,0)')
// 		{
// 			col1.style.backgroundColor = 'rgb(128, 128, 128)'			
// 		}
// /*--------------------------------------------------------------------*/
// 		if(style2 === 'rgb(128, 128, 128)')
// 		{
// 			col2.style.backgroundColor = 'rgb(255,255,0)'
// 		}
// 		else if (style2 === 'rgb(255,255,0)')
// 		{
// 			col2.style.backgroundColor = 'rgb(128, 128, 128)'			
// 		}
// /*--------------------------------------------------------------------*/
// 		if(style3 === 'rgb(128, 128, 128)')
// 		{
// 			col3.style.backgroundColor = 'rgb(0,255,0)'
// 		}
// 		else if (style3 === 'rgb(0,255,0)')
// 		{
// 			col3.style.backgroundColor = 'rgb(128, 128, 128)'			
// 		}
// /*--------------------------------------------------------------------*/
// 	}

function svetofor()
	{
/*--------------------------------------------------------------------*/
		var col1 = document.getElementById('red');
		var style1 = window.getComputedStyle(col1).backgroundColor;
/*--------------------------------------------------------------------*/
		var col2 = document.getElementById('yellow');
		var style2 = window.getComputedStyle(col2).backgroundColor;
/*--------------------------------------------------------------------*/
		var col3 = document.getElementById('green');
		var style3 = window.getComputedStyle(col3).backgroundColor;
/*--------------------------------------------------------------------*/
		var colors = [style1, style2, style3];
		for(var i = 0; i <= colors.length; i++)
		{
			colors[i]
		}
		return colors;
	}


console.log(svetofor());


}())