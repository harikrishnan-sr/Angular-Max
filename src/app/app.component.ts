import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  eventCount = 0;

  oddComponents: number[] = [];
  evenComponents: number[] = [];

  onGameEvent() {
    this.eventCount++;
    console.log(this.eventCount);
    if (this.eventCount % 2 === 0) {
      this.evenComponents.push(this.eventCount);
    } else {
      this.oddComponents.push(this.eventCount);
    }
  }
}
