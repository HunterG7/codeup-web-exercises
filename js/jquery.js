$(function() {
	"use strict";

	// Exercise 1
	// window.onload = function () {
	// 	alert('The page has finished loading!');
	// }

	// Exercise 2
	// alert('Title: ' + $('#page-title').text());
	// alert('Table: ' + $('#table').text());

	// $('.codeup').css({
	// 	'border': '1px solid red'
	// })

	// $('li').css('font-size', '20px');
	// $('h1, p, li').css('background-color', 'yellow');
	// alert('h1 elements: ' + $('h1').text());

	// Exercise 3
	$('h1').click(function(e){
		$('h1').css('background-color', 'orange');
	});

	$('p').dblclick(function(e){
		$('p').css('font-size', '18px');
	});

	$('li').hover(
		function(e){
			$('li').css('color', 'red');
		},
		function(e){
			$('li').css('color', 'black');
		}
	);

})