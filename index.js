"use strict";

var request = require('request');

var URL = 'http://finance.google.com/finance/info?&q=';
var stocks = ["HDFC","SBIN"]

var stocks_to_query  = stocks.join(',');

console.log(stocks_to_query);


function get_prices(){
	request(URL + stocks_to_query, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			body = JSON.parse(body.replace(/\/+/g, ''))
			console.log(body)
		}else{
			throw error;
		}
	})
}

setInterval(get_prices, 1000);