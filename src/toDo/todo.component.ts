import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgFor } from '@angular/common';

class Item {
  public purchase: string;
  public done: boolean;
  public price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: "todo-app",
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrls: ["./todo.component.css"],
})
export class ToDoComponents {
  public text: string = "ТЕСТ";
  public price: number = 10;

  items: Item[] = [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Масло", done: false, price: 60 },
    { purchase: "Картофель", done: true, price: 22.6 },
    { purchase: "Сыр", done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
    this.text = ''
    this.price= 55
  }
  onTextChange(value: string) {
    console.log("Text ngModel:", value);
  }

  onPriceChange(value: number) {
    console.log("Price ngModel:", value);
  }
  trackByPurchase(index: number, item: Item): string {
    return item.purchase;
  }
}