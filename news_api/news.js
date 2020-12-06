var request = require('request');

function getNews(ticker, res) {
	var news_prefix = 'https://newsapi.org/v2/everything?apiKey=4342216445f745a194d1a6d6c7b3a45e&q=';
	var request_url = news_prefix + ticker;
	console.log("Requesting News API || " + request_url);
	var requestOptions = {
		'url': request_url,
		'headers': {
			'Content-Type': 'application/json'
			},
		'json': true
		};
	request(requestOptions,
	        function(error, response, body) {
				res.json(body);
			}
	);
}

module.exports = getNews;