$(function() {
	"use strict";

	window.onload = function () {
		alert('The page has finished loading!');
	}

	alert('Title: ' + $('#page-title').text());
	alert('Table: ' + $('#table').text());

	$('.codeup').css({
		'border': '1px solid red'
	})

	$('li').css('font-size', '20px');
	$('h1, p, li').css('background-color', 'yellow');
	alert('h1 elements: ' + $('h1').text());

})