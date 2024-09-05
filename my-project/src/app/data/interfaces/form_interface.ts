import { FormControl } from '@angular/forms';
export interface UserForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
