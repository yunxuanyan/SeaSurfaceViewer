import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-height-chart',
  templateUrl: './height-chart.component.html',
  styleUrls: ['./height-chart.component.scss']
})
export class HeightChartComponent implements OnInit,OnChanges {

  constructor() {     
    if(this.height && this.height.toString() == 'null') {
      this.height = undefined;
    }
}

  @ViewChild('heightContainer') container;
  
  chart = null;
  splineArea = null;
  @Input() height = 0;
  @Input() title;
  tag;
  isInit =false;

  ngOnInit() {
    this.chart = anychart.area();
    this.chart.title(this.title);
    let data = anychart.data.set([
      {x:"0",value:0},
      {x:"1",value:4},
      {x:"2",value:0}]);
    this.splineArea = this.chart.splineArea();
    //TODO: fix the scale
    this.splineArea.data(data);
  }

  ngAfterViewInit() {
    if(!this.container){
      this.isInit = false;
      return;
    }
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
    this.isInit = true;
  }

  ngOnChanges() {
    if(this.height && this.height.toString() == 'null') {
      this.height = undefined;
    }
    if(this.height ==undefined){
      this.isInit = false;
      return;
    }
    if(!this.isInit && this.container){
      this.chart.container(this.container.nativeElement);
      this.chart.draw();
      this.isInit = true;
    }

    this.tag = `Height: ${this.height} meters`;
    if(!this.chart) {
      return;
    }
    let data = anychart.data.set([
      {x:"0",value:0},
      {x:"1",value:this.height},
      {x:"2",value:0}]);
      this.splineArea.data(data);
  }
}
