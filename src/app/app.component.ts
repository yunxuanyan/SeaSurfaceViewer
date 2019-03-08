import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { CsvReaderService } from './services/csv-reader.service';
import { JsonReaderService } from './services/json-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sea Surface Dashboard';
  dateTime = '2018-11-08T00:00:00Z';
  surface = null;
  wave = null;

  constructor(
    private surfaceDataService:CsvReaderService,
    private waveDataService:JsonReaderService
    ){}

  ngOnInit() {
    this.surfaceDataService.readCsvFile();
    this.waveDataService.readJsonFile();
  }

  //TODO: get initial date after file read
  // ngAfterViewInit() {
  //   this.surface = this.surfaceDataService.getSurfaceObj(this.dateTime);
  //   console.log(this.surface);
  // }
 
  getSlideDateTime($event){
    this.dateTime = new Date($event).toISOString().substring(0,19)+'Z';
    this.surface = this.surfaceDataService.getSurfaceObj(this.dateTime);
    this.wave = this.waveDataService.getWaveObj(this.dateTime);
  }

}
