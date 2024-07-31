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
  selector: "purchase-app",
  standalone: true,
  imports: [FormsModule, NgFor],
  template: ` <h1>Список покупок</h1>
    <div>
      <p>
        <label>Товар</label><br />
        <input [(ngModel)]="text" (ngModelChange)="onTextChange($event)" />
      </p>
      <p>
        <label>Цена</label><br />
        <input
          type="number"
          [(ngModel)]="price"
          (ngModelChange)="onPriceChange($event)"
        />
      </p>
      <button (click)="addItem(text, price)">Добавить</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Предмет</th>
          <th>Цена</th>
          <th>Куплено</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items; trackBy: trackByPurchase">
          <td>{{ item.purchase }}</td>
          <td>{{ item.price }}</td>
          <td><input type="checkbox" [(ngModel)]="item.done" /></td>
        </tr>
      </tbody>
    </table>`,
})
export class AppComponent {
  public text: string = "";
  public price: number = 0;

  items: Item[] = [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Масло", done: false, price: 60 },
    { purchase: "Картофель", done: true, price: 22.6 },
    { purchase: "Сыр", done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
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