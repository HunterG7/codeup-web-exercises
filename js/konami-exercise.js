(() => {
	"use strict"

	let keyCodeArr = [];
	let correctArr = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
	$(document).keyup(function(event) {
		keyCodeArr.push(event.keyCode);
		if (keyCodeArr.length === 11){
			let count = 0;
			let numCorrect = 0;
			keyCodeArr.forEach((element) => {
				if (element === correctArr[count]){
					numCorrect++;
				}
				count++;
			});

			let intervalCount = 0,
				interval = 1000;

			if (numCorrect === 11){
				$('body').css('background-color', '#288dcc');
				$('.title').css('color', 'black');
				$('.title').text('Konami Code Exercise');
				$('.sub-text-wrapper').css('display', 'flex');
				alert('You have added 30 lives!');
			} else {
				let intervalId = setInterval(function () {
					if (intervalCount === 5) {
						$('body').css('background-color', '#288dcc');
						$('.title').css('color', 'black');
						$('.title').text('Konami Code Exercise');
						$('.sub-text-wrapper').css('display', 'flex');
						clearInterval(intervalId);
					} else {
						$('body').css('background-color', 'red');
						$('.title').css('color', 'white');
						$('.title').text('That is not the Konami Code!');
						$('.sub-text-wrapper').css('display', 'none');
					}
					intervalCount++;
				}, interval);
			}
			keyCodeArr = [];
		}
	});


})()