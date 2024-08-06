import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataService } from "../services/data.service";
import { LogService } from "../services/log.service";

@Component({
  selector: "data-comp",
  standalone: true,
  providers: [DataService, LogService],
  imports: [FormsModule],

  template: `<div>
    <div>
      <input [(ngModel)]="newItem" />
      <button (click)="addItem(newItem)">Добавить</button>
    </div>
    <ul>
      @for(item of items; track $index){
      <li>{{ item }}</li>
      }
    </ul>
  </div>`,
})
export class DataComponent {
  newItem: string = "";
  items: string[] = [];
  constructor(private dataService: DataService) {}

  addItem(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
