import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaSurfaceComponent } from './sea-surface.component';

describe('SeaSurfaceComponent', () => {
  let component: SeaSurfaceComponent;
  let fixture: ComponentFixture<SeaSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
