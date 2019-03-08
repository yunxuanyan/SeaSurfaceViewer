import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  surfaceDataObjs = {};//dataTime as keys

  constructor(private http:HttpClient) { }

  readCsvFile(){
    this.http.get('./../assets/data.csv', {responseType: 'text'})
    .subscribe(
      data =>{
        let lines = data.split('\n');
        let headers = lines[0].split(',');
        for(let i=1,length=lines.length;i<length;i++){
            let values = lines[i].split(',');
            let valueObj = {};
            for(let j=1,valLength=values.length;j<valLength;j++){
              valueObj[headers[j]] = values[j];
            }
            this.surfaceDataObjs[values[0]]=valueObj;
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

  getSurfaceObj(dataTime:string) {
    return this.surfaceDataObjs[dataTime];
  }
}
