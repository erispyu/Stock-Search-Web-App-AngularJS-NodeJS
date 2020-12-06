var request = require('request');

function autocomplete(ticker, res) {
	var tiingo_query_prefix = 'https://api.tiingo.com/tiingo/utilities/search?query=';
	var myToken = '13ade097b5af5abbc4d29f546e9bc5a924e4ec34';
	var request_url = tiingo_query_prefix + ticker + '&token=' + myToken;
	console.log("Requesting tiingo API for autocomplete || " + request_url);
	var requestOptions = {
			'url': request_url,
			'json': true,
	        'headers': {
	            'Content-Type': 'application/json',
	            }
			};
	var suggestions = [];		
	request(requestOptions,
	        function(error, response, body) {
				for(var i = 0; i < body.length; i++) {
					var suggestion = {};
					suggestion.ticker = body[i].ticker;
					suggestion.name = body[i].name;
					suggestions.push(suggestion);
				}
				res.json(suggestions);
			}
	);
}

module.exports = autocomplete;