import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.services';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDividerModule],
  providers: [ApiService],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  public login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  public register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10,15}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ])
  });

  onLogin() {
    if (this.login.valid) {
      this.apiService.post('auth/login', {
        email: this.login.get('email')?.value,
        password: this.login.get('password')?.value
      }).subscribe({
        next: (response: any) => {
          if (response?.data) {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('idUser', response.data.idUser);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('username', response.data.username);
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao fazer login. Verifique as credenciais.');
        }
      });
    } else {
      alert('Formulário inválido');
    }
  }
  onRegister() {
    if (this.register.valid) {
      this.apiService.post('users', {
        email: this.register.get('email')?.value,
        password: this.register.get('password')?.value,
        phone: this.register.get('phone')?.value,
        name: this.register.get('name')?.value
      }).subscribe({
        next: (response: any) => {
          if (response?.data) {
            this.apiService.post('auth/login', {
              email: this.register.get('email')?.value,
              password: this.register.get('password')?.value
            }).subscribe({
              next: (response: any) => {
                if (response?.data) {
                  localStorage.setItem('accessToken', response.data.accessToken);
                  localStorage.setItem('idUser', response.data.idUser);
                  localStorage.setItem('refreshToken', response.data.refreshToken);
                  localStorage.setItem('role', response.data.role);
                  localStorage.setItem('username', response.data.username);
                  this.router.navigate(['/home']);
                }
              },
              error: (err) => {
                console.error(err);
                alert('Erro ao fazer login. Verifique as credenciais.');
              }
            });
          }
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao fazer login. Verifique as credenciais.');
        }
      });
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  }
}
