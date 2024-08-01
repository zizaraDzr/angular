import { Component, ViewChild, ElementRef } from "@angular/core";
import { ChildComponent } from "./child.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "cmpWithChild-app",
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: "./cmpWithChild.component.html",
  styleUrls: ["./cmpWithChild.component.css"],
})
export class CmpWithChild {
  name = "Tom";
  age = 24;
  clicks = 0;

  @ViewChild("inputField", { static: true }) inputField!: ElementRef;

  onNameChange(value: string) {
    if (value.length > 8) {
      this.name = value.substring(0, 8);
      // Обновляем значение в поле ввода
      this.inputField.nativeElement.value = this.name;
    } else {
      this.name = value;
    }
    console.log("Price ngModel:", this.name);
  }
  onChangedBtn(increased: boolean) {
    increased ? this.clicks++ : this.clicks--;
  }
}
