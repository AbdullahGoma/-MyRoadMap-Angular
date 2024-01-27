import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Component Directive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: '<h1>Hello World, {{title}}</h1>',
  // styles: ['h1{ color: darkblue;}']
})
export class AppComponent {
  title = 'AngularFirst';

  sayHello():string
  {
    return `Hello World, ${this.title}`
  }
}
