import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { GetChartDataService } from './get-chart-data.service'

@Component({
  selector: 'app-high-chart-stock-search',
  templateUrl: './high-chart-stock-search.component.html',
  styleUrls: ['./high-chart-stock-search.component.css']
})
export class HighChartStockSearchComponent implements OnInit {
  
  ticker: string;
  ohlc = [];
  volume = [];
  groupingUnits = [];
  chartOptions: {};

  constructor(
    private getChartDataService: GetChartDataService
  ) { }

  Highcharts = Highcharts;

  ngOnInit(): void {
    this.ticker = "AAPL"

    this.getChartDataService.getChartData(this.ticker).subscribe(
      (data: any) => {
        var dataLength = data.length
        var i = 1
        for (i; i < dataLength; i += 1) {
          this.ohlc.push([
              data[i][0], // the date
              data[i][1], // open
              data[i][2], // high
              data[i][3], // low
              data[i][4] // close
          ]);
          this.volume.push([
              data[i][0], // the date
              data[i][5] // the volume
          ]);
      }
      }
    )

    this.groupingUnits = [[
      'week',                         // unit name
      [1]                             // allowed multiples
  ], [
      'month',
      [1, 2, 3, 4, 6]
  ]]

    this.chartOptions = {
      rangeSelector: {
        selected: 2
    },

    yAxis: [{
        startOnTick: false,
        endOnTick: false,
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2,
        resize: {
            enabled: true
        }
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'Volume'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
    }],

    tooltip: {
        split: true
    },

    plotOptions: {
        series: {
            dataGrouping: {
                units: this.groupingUnits
            }
        }
    },

    series: [{
        type: 'candlestick',
        name: 'AAPL',
        id: 'aapl',
        zIndex: 2,
        data: this.ohlc
    }, {
        type: 'column',
        name: 'Volume',
        id: 'volume',
        data: this.volume,
        yAxis: 1
    }, {
        type: 'vbp',
        linkedTo: 'aapl',
        params: {
            volumeSeriesID: 'volume'
        },
        dataLabels: {
            enabled: false
        },
        zoneLines: {
            enabled: false
        }
    }, {
        type: 'sma',
        linkedTo: 'aapl',
        zIndex: 1,
        marker: {
            enabled: false
        }
    }]
    }

    HC_exporting(Highcharts);
  }

}
