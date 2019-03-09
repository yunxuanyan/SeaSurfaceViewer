import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges } from '@angular/core';

import 'anychart';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit, AfterViewInit, OnChanges {

  constructor() { }

  @ViewChild('gaugeContainer') container;

  @Input() speed;
  @Input() direction;
  @Input() type;
  @Input() title;
  @Input() tag;
  range = 0;

  chart: anychart.charts.CircularGauge = null;

  ngOnInit() {
    this.direction = this.direction || 0;
    this.initChart();
    this.range = this.getRange();
  }
  
  getRange() {
    switch(this.type){
      case 'water':
        return 0.1;
      case 'air':
        return 15;
    }
  }

  initChart() {
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
      .endRadius('30%')
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
      this.chart.data([this.direction]);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

  ngOnChanges() {
    if(!this.chart){
      return;
    }
    this.direction = this.direction || 0;
    this.chart.data([this.direction]);
    this.chart.title(this.title);
    this.chart.needle().endRadius(`${this.getGaugeNeedLength()}%`);
    this.getTag();
    this.chart.autoRedraw();
  }

  //TODO: auto calculate the length given maxSpeed and minSpeed
  getGaugeNeedLength() {
    if(this.speed){
      return 30+this.speed*70/this.range;
    } else {
      return 30;
    }
      
  }

  getTag() {
    if(this.direction && this.speed) {
      this.tag = `Direction: ${this.direction} degrees; Speed: ${this.speed} m/s`;
    } else if(this.speed){
      this.tag = `Speed: ${this.speed} m/s`;
    } else if(this.direction) {
      this.tag = `Direction: ${this.direction} degrees`;
    }

  }
}
