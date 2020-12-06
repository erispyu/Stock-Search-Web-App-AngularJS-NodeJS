var request = require('request');

var myToken = '13ade097b5af5abbc4d29f546e9bc5a924e4ec34';
var tiingo_iex_prefix = 'https://api.tiingo.com/iex/';

function getDailyChartData(ticker, startDate, resampleFreq, res) {
	var request_url = tiingo_iex_prefix + ticker + '/prices?startDate=' + startDate + '&resampleFreq=' + resampleFreq + '&token=' + myToken;
	var requestOptions = {
	        'url': request_url,
	        'headers': {
	            'Content-Type': 'application/json',
	            }
			};
	console.log("Requesting tiingo API for daily chart data || " + request_url);
	request(requestOptions,
	        function(error, response, body) {
	            res.json(body);
	        }
	);
}

module.exports = getDailyChartData;