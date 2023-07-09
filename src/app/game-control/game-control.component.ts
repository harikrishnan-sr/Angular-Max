import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output('gameEvent') gameEvent = new EventEmitter();
  interval: number;

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameEvent.emit();
    }, 1000) as unknown as number;
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
