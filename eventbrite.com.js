const URL_TO_SCRAPE = 'https://www.eventbrite.com/rally/san-francisco/san-francisco-event-calendar/';
const axios = require('axios');
const cheerio = require('cheerio');
// const format = require('./format');

const getEvents = async () => {
	// returns an array of events
	return new Promise((resolve, reject) => {
		const eventList = [];
		axios.get(URL_TO_SCRAPE).then(res => {
			const $ = cheerio.load(res.data);
			$('div.event-card').each((i, element) => {
				let eventURL = $(element).find('h3').find('a').attr('href');
				let eventTitle = $(element).find('h3').find('a').text();
				let eventDate = $(element).find('p.date').find('time').attr('datetime');
				// todo: convert time into universal format
				eventList.push({
					'date': eventDate,
					'title': eventTitle,
					'url': eventURL
				});
				// console.log(eventTitle, eventURL, eventDate);
			});
			return resolve(eventList); // todo: put this in a try/catch block
		});
	});
}

module.exports = {
	url: 'https://sf.funcheap.com/events/',
	getEvents: getEvents
}