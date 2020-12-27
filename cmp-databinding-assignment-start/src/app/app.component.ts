import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumberLog : number[] = [];
  oddNumberLog : number[] = [];

  onGameStart(currentNum: number) {
    if (currentNum % 2 === 0) {
      this.evenNumberLog.push(currentNum);
    } else {
      this.oddNumberLog.push(currentNum);
    }
  }
}
