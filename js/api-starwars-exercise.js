const lukeSkywalker1 = async () => {
	try {
		let response = await fetch ("https://swapi.dev/api/people/1");
		let data = await response.json();
		return data;
	} catch (error){
		console.log(error);
	}
}

const characterBirthYear = async (number) => {
	try {
		let response = await fetch(`https://swapi.dev/api/people/${number}`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

(async()=>{

	let lukeInfo = await lukeSkywalker1();
	console.log(lukeInfo);

	let character = await characterBirthYear(6);
	console.log(`${character.name} was born in ${character.birth_year}.`);

	let count = 1;
	lukeInfo.films.forEach((film) => {
		console.log(`${count}: ${film}`);
		count++;
	});

})();

