const sfFunCheap = require('./sf.funcheap.com.js');
const eventBrite = require('./eventbrite.com.js');
//const doTheBay = require('./dothebay.com.js');

// (async () => { // this one isn't working - getting a 500 error - JS may be required, cheerio is probably insufficient to scrape
// 	let doTheBayEvents = await doTheBay.getEvents();
// 	console.log(doTheBayEvents);
// })();

(async () => {
	let eventBriteEvents = await eventBrite.getEvents();
	console.log(eventBriteEvents);
})();

(async () => {
	let sfFunCheapEvents = await sfFunCheap.getEvents();
	console.log(sfFunCheapEvents);
})();