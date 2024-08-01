import { CmpWithChild } from './../childComponents/cmpWithChild.component';
import { ToDoComponents } from './../toDo/todo.component';
import { Component } from '@angular/core'

@Component({
  selector: "purchase-app",
  standalone: true,
  imports: [ToDoComponents, CmpWithChild],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}