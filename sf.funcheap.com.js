const URL_TO_SCRAPE = 'https://sf.funcheap.com/events/';
const axios = require('axios');
const cheerio = require('cheerio');
const format = require('./format');

const getEvents = async () => {
	// returns an array of events
	return new Promise((resolve, reject) => {
		const eventList = [];
		axios.get(URL_TO_SCRAPE).then(res => {
			const $ = cheerio.load(res.data);
			let eventDate;
			$('tr').each((i, element) => {
				// first, try to find date (listed vertically, not attached to each event)
				tdDate = $(element).find('h2').text();
				if (tdDate) {
					eventDate = tdDate; // todo: convert date into universal format
					// also, I need to grab the event time
				}
				const anchorTag = $(element).find('span').find('a');
				const eventURL = anchorTag.attr('href');
				const eventTitle = format.minWhiteSpace(anchorTag.text());
				if (eventURL) {
					eventList.push({
						'date': eventDate,
						'title': eventTitle,
						'url': eventURL
					});
				}
				// note: there's a cost column here too I could potentially grab
			});
			return resolve(eventList); // todo: put this in a try/catch block
		});
	});
}

module.exports = {
	url: 'https://sf.funcheap.com/events/',
	getEvents: getEvents
}