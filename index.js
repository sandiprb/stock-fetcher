"use strict";

var curl = require('curlrequest');

var URL = 'http://finance.google.com/finance/info?&q=';
var stocks = ["HDFC","SBIN"]
var stocks_to_query  = stocks.join(',');

console.log(stocks_to_query);

var options ={
	url: URL + stocks_to_query,
	include: true
};

function get_prices(){	
	curl.request(options, function (err, parts) {
		try{
			var parts = parts.split('\n\r');
			var result = JSON.parse(parts[1].replace('//', ''));
			console.log(result);
		}catch(e){
			console.log(e);
			console.log("data "+ parts);
			console.log("Couldn't retrive data!!!!");
		}
	});
}

setInterval(get_prices, 5000);