import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '[app-servers]' // this is select by attribute
  // selector: '.app-servers' // this is select by class
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
