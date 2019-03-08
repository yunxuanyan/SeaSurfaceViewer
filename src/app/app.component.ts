import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sea Surface Dashboard';
  dateTime = Date.parse('2018-11-08T00:00:00Z');
 
  getSlideDateTime($event){
    this.dateTime = $event;
    console.log(this.dateTime);
  }

}
