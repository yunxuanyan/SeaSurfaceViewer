import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-height-chart',
  templateUrl: './height-chart.component.html',
  styleUrls: ['./height-chart.component.scss']
})
export class HeightChartComponent implements OnInit {

  constructor() { }

  @ViewChild('heightContainer') container;
  
  chart = null;


  ngOnInit() {
    this.chart = anychart.area();
    this.chart.title('Wave Height');
    let data = anychart.data.set([
      {x:"0",value:0},
      {x:"1",value:4.56},
      {x:"2",value:0}]);
      this.chart.splineArea(data);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }
}
