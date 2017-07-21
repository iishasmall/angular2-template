import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div>
  <app-header></app-header>
  <app-footer></app-footer>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
