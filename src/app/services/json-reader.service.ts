import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  waveDataObjs = null;

  constructor(private http:HttpClient) { }

  readJsonFile() {
    this.http.get('./../assets/data.json', {responseType: 'text'})
    .subscribe(
      data=>{
        this.waveDataObjs = JSON.parse(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  getWaveObj(dataTime:string) {
    return this.waveDataObjs[dataTime];
  }
}
