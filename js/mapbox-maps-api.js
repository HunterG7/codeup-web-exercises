"use strict"

const accessToken = 'pk.eyJ1IjoiaHVudGVyZzciLCJhIjoiY2xmazBqa3Y1MDY5NzNwbXMzd2c5cnNnZCJ9.WVxQo3MEZWJqZ4xxC8raDA';
let resetMap = document.querySelector('#resetMap');

const spirulina = {
	Name: 'Spirulina',
	Location: 'Puerto Escondido, Mexico',
	Favorite: 'chips and 3 salsas',
	longitude: -97.042937,
	latitude: 15.836732
}
const thousandOaksCafe = {
	Name: 'Thousand Oaks Cafe',
	Location: 'San Antonio, Texas',
	Favorite: 'Breakfast Tacos',
	longitude: -98.442457,
	latitude: 29.489983
	}
const fullGoods = {
	Name: 'Full Goods Diner',
	Location: 'San Antonio, Texas',
	Favorite: 'Classic Breakfast',
	longitude: -98.48031,
	latitude: 29.44383
}

let myFavPlacesToEat = [spirulina, thousandOaksCafe, fullGoods];

//displays 3 of my favorite restaurants with some info about them
myFavPlacesToEat.forEach((place) => {
	let marker = new mapboxgl.Marker()
		.setLngLat([place.longitude, place.latitude])
		.addTo(map);
	let popup = new mapboxgl.Popup()
		.setHTML(`<h4>${place.Name}</h4>
				They are located in ${place.Location}.
				My favorite menu item is ${place.Favorite}.`);
	marker.setPopup(popup);
});

//reset map to san antonio
resetMap.addEventListener('click', function(){
	map.setCenter([-98.489615, 29.426827]);
	map.setZoom(9);
});



