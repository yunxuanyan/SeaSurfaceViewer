import { Component, OnInit, ViewChild } from '@angular/core';

import 'anychart';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  constructor() { }

  @ViewChild('gaugeContainer') container;

  chart: anychart.charts.CircularGauge = null;

  ngOnInit() {
    this.chart = anychart.gauges.circular();
    this.chart.fill('#fff') //background
      .stroke(null)
      .padding(0)
      .margin(30)
      .startAngle(0)
      .sweepAngle(360);
    this.chart.axis().labels()
      .padding(3)
      .position('outside')
      .format('{%Value}\u00B0');
    this.chart.axis().scale()
      .maximum(360);
    this.chart.axis().scale()
      .ticks({interval: 30});
    this.chart.axis().scale()
      .minorTicks({interval: 10});
    this.chart.axis().scale()
      .minimum(0);
    this.chart.axis()
      .fill('#7c868e')
      .startAngle(0)
      .sweepAngle(360)
      .width(1)
      .ticks(
              {
                  type: 'line',
                  fill: '#7c868e',
                  length: 4,
                  position: 'outside'
              }
      );
      this.chart.needle()
      .startRadius('5%')
      .endRadius('100%')
      .middleRadius(0)
      .startWidth('5%')
      .middleWidth('5%')
      .endWidth('0.4%')
      .fill('blue')
      .stroke('white');
      this.chart.cap()
        .radius('5%')
        .fill('#1976d2')
        .enabled(true)
        .stroke(null);
      this.chart.data([120.15]);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

}
