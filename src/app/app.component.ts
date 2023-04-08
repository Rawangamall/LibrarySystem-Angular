import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librarysystem';

  isDashboard: boolean;
  constructor() {
    if (window.location.href.includes('web')) {
      this.isDashboard = true;
    } else {
      this.isDashboard = false;
    }
  }

}
