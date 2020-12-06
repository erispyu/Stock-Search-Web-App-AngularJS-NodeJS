const express = require('express');
const router = express.Router();
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;

const getCompanyDescriptionData = require('./tiingo_api/companyDescriptionData');
const getLatestPriceData = require('./tiingo_api/latestPriceData');
const getHistoricalData = require('./tiingo_api/historicalData');
const getDailyChartData = require('./tiingo_api/dailyChartData');
const autocomplete = require('./tiingo_api/tickerAutocomplete');
const getNewsData = require('./news_api/news');

app.use(bodyParser.json());
app.use(express.static("./angular-frontend/dist/angular-frontend"));

/**
 *  Homepage/Search Route
 */
app.get('/', (req, res) => {
    res.sendFile("./angular-frontend/dist/angular-frontend/index.html");
});

app.get('/high-charts/:ticker', (req, res) => {
    // getHighCharts(req.params.ticker, res)
    res.sendFile(__dirname + "/highCharts.html");
});

app.get('/get-company-description/:ticker', (req, res) => {
    getCompanyDescriptionData(req.params.ticker, res);
});

app.get('/get-latest-price/:ticker', (req, res) => {
    getLatestPriceData(req.params.ticker, res);
});

app.get('/get-historical-data/:ticker', (req, res) => {
    getHistoricalData(req.params.ticker, res);
});

app.get('/get-daily-chart-data/:ticker/:startDate/:resampleFreq', (req, res) => {
    getDailyChartData(req.params.ticker, req.params.startDate, req.params.resampleFreq, res);
});

/**
 *  Auto Complete
 */
app.get('/autocomplete/:ticker', (req, res) => {
    autocomplete(req.params.ticker, res);
});

app.get('/get-news/:ticker', (req, res) => {
    getNewsData(req.params.ticker, res);
});

/**
 *  Details Route
 */
app.get('/details/:ticker', (req, res) => {
    // res.send();
});

/**
 *  Watchlist Route
 */
app.get('/watchlist', (req, res) => {
    // res.send();
});

/**
 *  Portfolio Route
 */
app.get('/portfolio', (req,res) => {
    // res.send();
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});