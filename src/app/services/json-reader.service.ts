import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  waveDataObjs = null;

  constructor(private http:HttpClient) { }

  readJsonFile() {
    return this.http.get('./../assets/data.json', {responseType: 'text'}).toPromise()
    .then(
      data=>{
        this.waveDataObjs = JSON.parse(data);
        return Promise.resolve();
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
