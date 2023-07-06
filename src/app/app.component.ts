import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = 'Max';

  onReset(event: Event) {
    this.username = '';
  }

  getColor() {
    return this.username === 'online' ? 'green' : 'red';
  }
}
