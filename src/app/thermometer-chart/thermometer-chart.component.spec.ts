import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermometerChartComponent } from './thermometer-chart.component';

describe('ThermometerChartComponent', () => {
  let component: ThermometerChartComponent;
  let fixture: ComponentFixture<ThermometerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermometerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermometerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
