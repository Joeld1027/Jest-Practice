const googleDatabase = [
	'cats.com',
	'souprecipes.com',
	'flowerss.com',
	'animals.com',
	'catPictures.com',
	'myFdaouritescats',
];

const googleSearch = (searchInput, db) => {
	const matches = db.filter((website) => {
		return website.includes(searchInput);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('soup', googleDatabase));

module.exports = googleSearch;
