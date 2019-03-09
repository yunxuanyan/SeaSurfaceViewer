import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})
export class WaveComponent implements OnInit,OnChanges {
  @Input() wave;
  waveTag;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
