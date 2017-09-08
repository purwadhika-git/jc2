import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angka1 : number;
  angka2 : number;
  result : number;
  history : string[] = [];

  calculate(operator : string){
    if (operator == "+") {
      this.result = Number(this.angka1) + Number(this.angka2);
    }
    else if (operator == "-") {
      this.result = Number(this.angka1) - Number(this.angka2);
    }
    else if (operator == "x") {
      this.result = Number(this.angka1) * Number(this.angka2);
    }
    else if (operator == "/") {
      this.result = Number(this.angka1) / Number(this.angka2);
    }

    this.history.push(this.angka1 + " " + operator + " " + this.angka2 + " = " + this.result);
    
  }
}
