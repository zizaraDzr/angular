import { Component } from '@angular/core'
import { CmpWithChild } from './../childComponents/cmpWithChild.component';
import { DataComponent } from "./data.component";
import { ToDoComponents } from './../toDo/todo.component';
import { FormComponent } from "../form/form.component";
import { ClientComponent } from "../httpClient/client.component";

@Component({
  selector: "purchase-app",
  standalone: true,
  imports: [
    ToDoComponents,
    CmpWithChild,
    DataComponent,
    FormComponent,
    ClientComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}