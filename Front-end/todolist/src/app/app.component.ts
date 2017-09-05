import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ToDo : string = "";
  ToDoList : object[] = [];

  AddToDo () : void {
    if (this.ToDo != "") {
      var obj = { "todo" : this.ToDo, "deleted" : false, "completed" : false };
      this.ToDoList.push(obj);
      this.ToDo = "";
    }
  }

  GetData(){
    var newList : object[];
    
    for (var i = 0; i < this.ToDoList.length; i++) {
      var todo = this.ToDoList[i];
      
      // if (todo["deleted"] == false) {
      //   newList.push(todo);
      // }
      
      if ( ! todo["deleted"]) {
        newList.push(todo);
      }

      var angka = 10;
      var hasil = (angka % 2 == 0) ? "genap" : "ganjil";

    }
    
    return newList;
  }

  DeleteToDo(index) : void {
    this.ToDoList.splice(index, 1);
  }
}