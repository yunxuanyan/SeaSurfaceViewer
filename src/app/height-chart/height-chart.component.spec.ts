import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightChartComponent } from './height-chart.component';

describe('HeightChartComponent', () => {
  let component: HeightChartComponent;
  let fixture: ComponentFixture<HeightChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
