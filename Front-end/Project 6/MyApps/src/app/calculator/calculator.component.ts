import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  angka1 : number;
  angka2 : number;
  result : number = 0;

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  Sum() : void {
    //this.result =  Number(this.angka1) + Number(this.angka2);
    this.result = this.data.Sum(+this.angka1, +this.angka2);
  }

}