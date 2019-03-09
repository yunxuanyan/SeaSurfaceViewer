import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-thermometer-chart',
  templateUrl: './thermometer-chart.component.html',
  styleUrls: ['./thermometer-chart.component.scss']
})
export class ThermometerChartComponent implements OnInit, OnChanges {

  constructor() { }

  @ViewChild('thermometerContainer') container;

  @Input() temperature = 0;
  @Input() title;

  chart: anychart.standalones.Table = null;
  thermometer;
  tag;

  ngOnInit() {
    this.thermometer = anychart.gauges.linear();
    this.thermometer.data([this.temperature]).padding(10, 0, 30, 0);
    let scale = this.thermometer.scale();
    scale.minimum(2)
      .maximum(12);
    scale.ticks().interval(1);
    // scale.minorTicks().interval(2);
    this.thermometer.axis().scale(scale)
    .width('0.5%')
    .offset('-1%')
    .labels()
    .useHtml(true)
    .format('{%Value}&deg;C');
    this.thermometer.thermometer(0)
    .fill('#64b5f6')
    .stroke('#64b5f6');
    this.chart = anychart.standalones.table();
    this.chart.hAlign('center')
    .useHtml(true)
    .fontSize(16)
    .cellBorder(null);
    this.chart.contents([[this.title],[this.thermometer]]);
    this.chart.getRow(0).height(40);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

  ngOnChanges() {
    if(!this.thermometer){
      return;
    }
    this.thermometer.data([this.temperature]);
    this.tag = `Temperature: ${this.temperature} °C`;
  }

}
