import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserForm } from '../../data/interfaces/auth_interface';
import { Component, inject, signal } from '@angular/core';
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
  router: Router = inject(Router);
  isPasswordVisible = signal<boolean>(false);

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
    // xaVpnaF6ld;
    // aElizarov1;
    if (this.userForm.valid) {
      const formValue = this.userForm.getRawValue();
      this.authService
        .login({
          username: formValue.username as string,
          password: formValue.password as string,
        })
        .subscribe((res) => {
          this.router.navigate(['']);
        });
    }
  }
}
