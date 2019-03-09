import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sea-surface',
  templateUrl: './sea-surface.component.html',
  styleUrls: ['./sea-surface.component.scss']
})
export class SeaSurfaceComponent implements OnInit {

  @Input() surface;

  constructor() { }

  ngOnInit() {
  }

}
