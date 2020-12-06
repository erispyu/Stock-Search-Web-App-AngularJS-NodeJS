var request = require('request');

var myToken = '13ade097b5af5abbc4d29f546e9bc5a924e4ec34';
var tiingo_daily_prefix = 'https://api.tiingo.com/tiingo/daily/';

function getHistoricalData(ticker, res) {
	let date_ob = new Date();
	// adjust 0 before single digit date
	let date = ("0" + date_ob.getDate()).slice(-2);
	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	// current year
	let year = date_ob.getFullYear() - 2;

	var startDate = year + "-" + month + "-" + date

	var request_url = tiingo_daily_prefix + ticker + '/prices?startDate=' + startDate + '&resampleFreq=daily' + '&token=' + myToken;
	var requestOptions = {
	        'url': request_url,
	        'json': true,
	        'headers': {
	            'Content-Type': 'application/json',
	            }
	        };
	console.log("Requesting tiingo API for histroical data || " + request_url);
	request(requestOptions,
	        function(error, response, body) {
	        	var data = []
	        	for(var i = 0; i < body.length; i++){
	        		var date = new Date(body[i].date)
	        		var timestamp = date.getTime()
					data.push([
						timestamp,
						body[i].open,
						body[i].high,
						body[i].low,
						body[i].close,
						body[i].volume
					]);
				}
	            res.json(data)
	        }
	);
}

module.exports = getHistoricalData;