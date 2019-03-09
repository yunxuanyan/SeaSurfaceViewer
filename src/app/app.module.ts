import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { ThermometerChartComponent } from './thermometer-chart/thermometer-chart.component';
import { HeightChartComponent } from './height-chart/height-chart.component';
import { CsvReaderService } from './services/csv-reader.service';
import { HttpClientModule } from '@angular/common/http';
import { WaveComponent } from './wave/wave.component';
import { JsonReaderService } from './services/json-reader.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeSliderComponent,
    GaugeChartComponent,
    ThermometerChartComponent,
    HeightChartComponent,
    WaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CsvReaderService, JsonReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
