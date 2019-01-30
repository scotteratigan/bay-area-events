//var mongojs = require('mongoose');
// var axios = require('axios');
// var cheerio = require('cheerio');

var sfFunCheap = require('./sf.funcheap.com.js');
var eventBrite = require('./eventbrite.com.js');

(async () => {
	let eventBriteEvents = await eventBrite.getEvents();
	console.log(eventBriteEvents);
})()

/*(async () => {
	let sfFunCheapEvents = await sfFunCheap.getEvents();
	console.log(sfFunCheapEvents);
	// sfFunCheapEvents.forEach(event => {
	// 	console.log(JSON.stringify(event));
	// });
})()*/