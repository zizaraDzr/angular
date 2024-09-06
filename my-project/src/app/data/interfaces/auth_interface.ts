import { FormControl } from '@angular/forms';
export interface UserForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}
