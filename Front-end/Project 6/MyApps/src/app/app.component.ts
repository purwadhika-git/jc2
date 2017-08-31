import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  myProp : string = "My Value";
  myProp2 : number = 10;
  myProp3 : Object = { "name":"My name" };
  myProp4 : string[] = ["A","B","C","D"];


  ChangeValue() :void {
    
    this.myProp = "New Value";

  }

  ChangeValue2() :string {
    
    return "";
  }




}
