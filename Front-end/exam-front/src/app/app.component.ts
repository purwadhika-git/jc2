import { Component } from '@angular/core';

import { MyDataService } from "./my-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private data : MyDataService){

  }

  PrintData(){
    var a = this.data.name;
    alert(this.data.GetData());
  }

}
