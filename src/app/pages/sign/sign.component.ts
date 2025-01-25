import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  signIn = true;

  public login = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );

  public register = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );

  toggleSignIn() {
    this.signIn = !this.signIn;
  }

  onSignIn() {
    const email = this.login.get('email')?.value;
    const password = this.login.get('password')?.value;
    console.log(email + ' ' + password);
  }

  onSignUp() {
    const email = this.register.get('email')?.value;
    const password = this.register.get('password')?.value;
    const name = this.register.get('name')?.value;
    
    console.log(email + ' ' + password + ' ' + name);
  }
}
