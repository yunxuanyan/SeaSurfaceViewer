import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { ThermometerChartComponent } from './thermometer-chart/thermometer-chart.component';
import { HeightChartComponent } from './height-chart/height-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSliderComponent,
    GaugeChartComponent,
    ThermometerChartComponent,
    HeightChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
