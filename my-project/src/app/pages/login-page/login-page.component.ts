import { AuthService } from './../../auth/auth.service';
import { UserForm } from '../../data/interfaces/form_interface';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  userForm: FormGroup<UserForm>;

  constructor() {
    this.userForm = new FormGroup<UserForm>({
      username: new FormControl<string | null>(null, [Validators.required]),
      password: new FormControl<string | null>(null, [Validators.required]),
      // age: new FormControl<number>(null, [
      //   Validators.required,
      //   Validators.min(0),
      // ]),
      // email: new FormControl<string>('', [
      //   Validators.required,
      //   Validators.email,
      // ]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValue = this.userForm.getRawValue();
      console.log(formValue);

    }
  }
}
