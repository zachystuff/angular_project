import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [
  ]
})
export class GameControlComponent implements OnInit {

  timerRef;

  interval: number = 0;

  @Output() gameTime = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.timerRef = setInterval(() => {
      this.gameTime.emit(this.interval + 1);
      this.interval++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.timerRef);
  }
}
