import { Component } from "@angular/core";
import { FormsModule, NgModel, NgForm } from "@angular/forms";

class User {
  constructor(
    public name: string,
    public companyId: number,
    public companyName: string,
    public age?: number,
  ) {}
}

interface Company {
  id: number;
  name: string;
}

@Component({
  selector: "form-app",
  standalone: true,
  imports: [FormsModule], // для работы с формами импортируем FormsModule
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  newUser = new User("", 1, "", undefined);

  users: User[] = [];
  companies: Company[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Microsoft" },
    { id: 3, name: "Google" },
    { id: 4, name: "Jetbrains" },
  ];

  addUser(form: NgForm) {
    console.log({form })
    const selectedCompany = this.companies.find(
      (c) => c.id === +this.newUser.companyId
    );
    if (selectedCompany) {
      this.newUser.companyName = selectedCompany.name;
    }
    this.users.push({ ...this.newUser });
    // this.newUser = new User("", 1, "", undefined); // Reset new user
  }
  logUser(name: NgModel, age: NgModel, company: NgModel) {
    console.log(name);
    console.log(age);
    console.log(company);
  }
}
