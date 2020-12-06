var request = require('request');

function getLatestPriceData(ticker, res) {
    var myToken = '13ade097b5af5abbc4d29f546e9bc5a924e4ec34';
    var tiingo_iex_prefix = 'https://api.tiingo.com/iex/';       
    var latestPrice_url = tiingo_iex_prefix + '?tickers=' + ticker + '&token=' + myToken;
    var latestPriceOptions = {
            'url': latestPrice_url,
            'json': true,
            'headers': {
                'Content-Type': 'application/json',
                }
            };
    console.log("Requesting tiingo API for latest price|| " + latestPrice_url);
    request(latestPriceOptions,
            function(error, response, body) {
                res.json(body);
            }
    );
}

module.exports = getLatestPriceData;