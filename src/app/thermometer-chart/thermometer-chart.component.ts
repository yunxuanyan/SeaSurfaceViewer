import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer-chart',
  templateUrl: './thermometer-chart.component.html',
  styleUrls: ['./thermometer-chart.component.scss']
})
export class ThermometerChartComponent implements OnInit {

  constructor() { }

  @ViewChild('thermometerContainer') container;

  @Input() title;

  chart: anychart.standalones.Table = null;
  value = 4.5;
  tag;

  ngOnInit() {
    let thermometer = anychart.gauges.linear();
    thermometer.data([this.value]).padding(10, 0, 30, 0);
    let scale = thermometer.scale();
    scale.minimum(2)
      .maximum(12);
    thermometer.axis().scale(scale)
    .width('0.5%')
    .offset('-1%')
    .labels()
    .useHtml(true)
    .format('{%Value}&deg;C');
    thermometer.thermometer(0)
    .name('Temperature')
    .id('0')
    .fill('#64b5f6')
    .stroke('#64b5f6');
    this.chart = anychart.standalones.table();
    this.chart.hAlign('center')
    .vAlign('middle')
    .useHtml(true)
    .fontSize(16)
    .cellBorder(null);
    this.chart.contents([['Thermometer'],['Temperature'],[thermometer]]);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

}
