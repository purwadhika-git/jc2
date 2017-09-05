import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // untuk data binding 
import { RouterModule } from '@angular/router'; // untuk routing & navigation

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '', component : CalculatorComponent },
      { path : 'mycomponent', component : MyComponentComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
