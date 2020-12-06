var request = require('request');

var myToken = '13ade097b5af5abbc4d29f546e9bc5a924e4ec34';
var tiingo_daily_prefix = 'https://api.tiingo.com/tiingo/daily/';

function getCompanyDescriptionData(ticker, res) {
		var companyDescription_url = tiingo_daily_prefix + ticker;
		var companyDescriptionOptions = {
				'url': companyDescription_url,
				'headers': {
					'Content-Type': 'application/json',
					'Authorization': 'Token ' + myToken
					},
				'json': true
				};
		console.log("Requesting tiingo API for company description || " + companyDescription_url);
		request(companyDescriptionOptions,
				function(error, response, body) {
					res.json(body);
				}
		);
}

module.exports = getCompanyDescriptionData;