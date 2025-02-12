import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  signIn = true;

  constructor(private router: Router) { }

  public login = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  public register = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    }
  );

  toggleSignIn() {
    this.signIn = !this.signIn;
  }

  onSignIn() {
    const email = this.login.get('email')?.value;
    const password = this.login.get('password')?.value;

    if (email === 'lucas@gmail.com' && password === 'lucas123') {

      localStorage.setItem('accessToken', "teste");
      localStorage.setItem('idUser', "teste");
      localStorage.setItem('refreshToken', "teste");
      localStorage.setItem('role', "teste");
      localStorage.setItem('username', "teste");

      this.router.navigate(['/home']);
    }

  }

  onSignUp() {
    const email = this.register.get('email')?.value;
    const password = this.register.get('password')?.value;
    const name = this.register.get('name')?.value;

    console.log(email + ' ' + password + ' ' + name);
  }
}
