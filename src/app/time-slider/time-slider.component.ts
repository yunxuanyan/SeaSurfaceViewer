import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-slider',
  templateUrl: './time-slider.component.html',
  styleUrls: ['./time-slider.component.scss']
})
export class TimeSliderComponent implements OnInit {

  @Output() slidedDateTime = new EventEmitter<number>();
  
  value=new Date(Date.parse('2018-11-07T00:00:00Z')).toLocaleString();
  minValue=Date.parse('2018-11-07T00:00:00Z');
  maxValue=Date.parse('2018-11-18T00:00:00Z');
  step = 0;

  constructor() { }

  ngOnInit() {
    this.step = (this.maxValue - this.minValue)/88;
  }

  getTimeValue(){
    let timeDoc =  document.getElementById('time-slider') as HTMLInputElement;
    let dateTimeInt = parseInt(timeDoc.value);
    this.value = new Date(dateTimeInt).toLocaleString();
    this.slidedDateTime.emit(dateTimeInt);
  }

}
