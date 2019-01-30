const URL_TO_SCRAPE = 'https://dothebay.com/events/today';
const axios = require('axios');
const cheerio = require('cheerio');
// const format = require('./format');

const getEvents = async () => {
	// returns an array of events
	return new Promise((resolve, reject) => {
		const eventList = [];
		try {
			console.log('Trying to get...');
			axios.get(URL_TO_SCRAPE).then(res => {
				console.log('Got res.data');
				const $ = cheerio.load(res.data);
				$('div.ds-listing').each((i, element) => {
					let eventURL = URL_TO_SCRAPE + $(element).find('a').attr('href'); // note: this is a relative path
					let eventTitle = $(element).find('a').find('ds-listing-event-title-text').text();
					//let eventDate = $(element).find('?');
					// todo: convert time into universal format
					eventList.push({
						//'date': eventDate,
						'title': eventTitle,
						'url': eventURL
					});
					// console.log(eventTitle, eventURL, eventDate);
				});
				return resolve(eventList); // todo: put this in a try/catch block
			});
		} catch (err) {
			console.error(err);
		}
	});
}

module.exports = {
	url: URL_TO_SCRAPE,
	getEvents: getEvents
}