const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter((user)=>{
	return user.languages.length >= 3;
});
console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address
const emails = users.map((user)=>{
	return user.email;
});
console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const initialValue = 0;
const totalYearsOfExperience = users.reduce(
	(accumulator, user) => accumulator + user.yearsOfExperience,
	initialValue
);
console.log(totalYearsOfExperience);

// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((acc, user) => {
	if (user.email.length > acc.length) {
		return user.email;
	} else {
		return acc;
	}
}, '');
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const namesString = users.reduce((acc, user, index) => {
	if (index === 0) {
		return user.name;
	} else {
		return acc + ', ' + user.name;
	}
}, '');
console.log(namesString);

