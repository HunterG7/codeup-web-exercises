(function() {
	"use strict";

	// create a circle object
	const circle = {
		radius: 5,

		getArea: function () {
			// TODO: complete this method
			let area = Math.PI * Math.pow(circle.radius, 2)

			return area;
		},

		logInfo: function (doRounding) {
			// TODO: complete this method.
			if (doRounding === true) {
				return Math.round(circle.getArea());
			} else {
				return circle.getArea();
			}
			// If doRounding is true, round the result to the nearest integer.
			// Otherwise, output the complete value

			console.log("Area of a circle with radius: " + this.radius + ", is: ");
		}
	};
	// console.log(circle.logInfo(false));

	// log info about the circle
	console.log("Raw circle information");
	console.log(circle.logInfo(false));
	console.log("Circle information rounded to the nearest whole number");
	console.log(circle.logInfo(true));

	console.log("=======================================================");
	// TODO: Change the radius of the circle to 5.

	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
})();