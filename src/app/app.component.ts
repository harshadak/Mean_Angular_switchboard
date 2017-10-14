import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // onOff = this.switchboard();
  switches = switchboard();

  clicked(i){
    this.switches[i] = !this.switches[i];
    console.log(switches);
  }
}

  var switches: Array<boolean> = [];

  function switchboard(): Array<boolean> {
    for (var i = 0; i < 120; i++) {
      switches[i] = false;
    }
    console.log(switches);
    return switches;
  }