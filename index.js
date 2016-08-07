var curl = require('curlrequest');

const param = {
	url:'http://finance.google.com/finance/info?&q=',
	stocks: ['HDFC']
};


var options ={
	url: param.url + param.stocks.join(),
	include: true
};

var last_price;

function get_prices(){	
	curl.request(options, function (err, parts) {
		try{
			var parts = parts.split('\n\r');
			var result = JSON.parse(parts[1].replace('//', ''));
			var cur_price = result[0].l;
			if(cur_price != last_price){
				console.log(cur_price);
			}
		}catch(e){
			console.log(e);
			console.log("Couldn't retrive data!!!!");
		}
	});
}

setInterval(get_prices, 1000);