// tell the angular that this is a component not only a class

import { Component } from "@angular/core";

// class decorator => component decorator
@Component({
  // to tell angular what to do with this class
  selector: 'app-server', // any name but need to be an unique selector
  templateUrl: './server.component.html', // create a template
  styles: [`
  .online {
    color: white;
    }
  `]
})

// export class is to put the class into public
export class ServerComponent {
  // this is for data binding
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
