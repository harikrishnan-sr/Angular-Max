import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPassword = true;
  toggleLog: { timestamp: Date; count: number }[] = [];

  toggleSecretPassword() {
    this.showPassword = !this.showPassword;
    this.toggleLog.push({
      timestamp: new Date(),
      count: this.toggleLog.length + 1,
    });
  }
}
