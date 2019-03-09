import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sea-surface',
  templateUrl: './sea-surface.component.html',
  styleUrls: ['./sea-surface.component.scss']
})
export class SeaSurfaceComponent implements OnInit,OnChanges {

  @Input() surface;

  temperature; // avoid long digital tail caused by js
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.surface && this.surface.air_temperature_at_2m_above_ground_level){
      this.temperature = (this.surface.air_temperature_at_2m_above_ground_level - 273.15).toFixed(2);
    }
  }

}
