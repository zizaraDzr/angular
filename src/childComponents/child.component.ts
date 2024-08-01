import { Input, Output, Component, EventEmitter } from "@angular/core";

@Component({
  selector: "child-comp",
  standalone: true,
  template: `<div>Имя пользователя: {{ _useName }}</div>
    <div>Возраст пользователя: {{ userAge }}</div>
    <button (click)="change()">--BUTTON--</button>`,
})
export class ChildComponent {
  _useName: string = "";
  @Input()
  set userName(name: string) {
    if (name.length > 5 && name.length <= 7) {
      this._useName = "Больше пяти";
    } else if (name.length > 7) {
      this._useName = "нельзя больше печатьть";
    } else {
      this._useName = name;
    }
  }
  get userName() {
    return this._useName;
  }

  @Output() onChangedBtn = new EventEmitter<boolean>();
  change() {
    let increased = false
    if (this.randomNumber(10, 0) >=4) {
        increased = !increased;
    }
    this.onChangedBtn.emit(increased);
  }
  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  @Input() userAge: number = 0;
}

