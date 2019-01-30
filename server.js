//var mongojs = require('mongoose');
// var axios = require('axios');
// var cheerio = require('cheerio');

var sfFunCheap = require('./sf.funcheap.com.js');

(async () => {
	let sfFunCheapEvents = await sfFunCheap.getEvents();
	console.log(sfFunCheapEvents);
	// sfFunCheapEvents.forEach(event => {
	// 	console.log(JSON.stringify(event));
	// });
})()