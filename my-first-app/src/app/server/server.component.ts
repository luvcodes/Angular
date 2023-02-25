// tell the angular that this is a component not only a class

import { Component } from "@angular/core";

// class decorator => component decorator
@Component({
  // to tell angular what to do with this class
  selector: 'app-server', // any name but need to be an unique selector
  templateUrl: './server.component.html' // create a template
})
export class ServerComponent {

}
