// Current Weather api call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 5 day 3-hour forecast api call
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


mapboxgl.accessToken = MAPBOX_ID;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

let searchInput = document.querySelector('#search-bar');
let searchBtn = document.querySelector('#search-btn');

// grabs geocode of input to pass to the api in order to receive weather data
const getWeatherData = async () => {
	let coords = await geocode(searchInput.value, MAPBOX_ID);
	let lon = coords[0],
		lat = coords[1];
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// get weather data for san antonio only
const getDefaultData = async () => {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_APPID}&units=imperial`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// formats all weather values to display without decimals
const formatWeatherProperties = (cards) => {
	console.log(cards);
	let cardIndex = 0;
	let cardNumber = 0;
	for (let i = 0; i < 5; i++) {
		cardNumber++;
		cardIndex = 8 * i;

		let tempTotal = 0;
		for (let j = 0; j < 8; j++) {
			tempTotal += cards.list[cardIndex].main.temp;
			cardIndex++;
		}
		let avgTemp = Math.floor((tempTotal / 8) + 0.5);

		cardIndex -= 8;
		let windSpeedTotal = 0;
		for (let j = 0; j < 8; j++) {
			windSpeedTotal += cards.list[cardIndex].wind.speed;
			cardIndex++;
		}
		let avgWindSpeed = Math.floor((windSpeedTotal / 8) + 0.5);

		cardIndex -= 8;
		let totalHumidity = 0;
		for (let j = 0; j < 8; j++) {
			totalHumidity += cards.list[cardIndex].main.humidity;
			cardIndex++;
		}
		let avgHumidity = Math.floor((totalHumidity / 8) + 0.5);

		cardIndex -= 8;
		let totalPressure = 0;
		for (let j = 0; j < 8; j++) {
			totalPressure += cards.list[cardIndex].main.pressure;
			cardIndex++;
		}
		let avgPressure = Math.floor((totalPressure / 8) + 0.5);

		buildCards(cards, avgTemp, avgWindSpeed, avgHumidity, avgPressure, cardNumber);
	}
}

// builds html for each card
const buildCards = (cards, temp, windSpeed, humidity, pressure, cardNumber) => {
	let weatherCard = document.querySelector(`.weather-card-${cardNumber}`);
	weatherCard.innerHTML =
		`<div class="column weather-card">
			<!--top half of card-->
			<div class="row top-card">
				<div class="column">
					<div class="row icon-temp-row">
						<!--icon column-->
						<div class="column"></div>
						<!--temperature column-->
						<div class="column align-center justify-center">
							<p class="temperature">${temp}&deg;F</p>
							<p>${cards.list[cardNumber - 1].weather[0].main}</p>	
						</div>
					</div>
				</div>
			</div>
			<!--bottom half of card-->
			<div class="row bottom-card">
				<div class="column justify-space-between">
					 <p class="weather-property">Wind</p>
					 <p class="weather-property">Humidity</p>
					 <p class="weather-property">Pressure</p>
				</div>
				<div class="column justify-space-between">
					<p>${windSpeed} mph</p>
					<p>${humidity}%</p>
					<p>${pressure}</p>
				</div>
			</div>
		</div>`;
}

// when button is clicked cards are created
searchBtn.addEventListener('click', async (e)=>{
	e.preventDefault();
	const cards = await getWeatherData();
	formatWeatherProperties(cards);
});

// site is defaulted on san antonio weather
window.onload = async function(){
	const defaultCards = await getDefaultData();
	formatWeatherProperties(defaultCards);
}




