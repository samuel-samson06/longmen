const url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}