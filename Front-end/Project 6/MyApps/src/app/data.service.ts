import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  arr1 : string[] = ['', '', ''];
  arr2 : number[] = [1, 2, 3, 4, 5];
  arr3 : object[] = [
    { "name" : "ABC", "address" : "address 1" },
    { "name" : "ABC", "address" : "address 1" },
    { "name" : "ABC", "address" : "address 1" },
    { "name" : "ABC", "address" : "address 1" },
    { "name" : "ABC", "address" : "address 1" },
  ];
  obj : object = { 
      "name" : "ABC",
      "address" : "address 1"
   };

  constructor() { }

  GetData() {

    for (var i = 0; i < this.arr3.length; i++) {
      console.log(this.arr3[i]['name']);
    }

    this.arr3.forEach(element => {
      console.log(element['address']);
    });

    this.arr3.push({ "name" : "", "address" : "" });


    return "Hello World !!";
  }

  Sum(angka1:number, angka2:number) : number {
    var result = angka1 + angka2;
    return result;
  }
}
