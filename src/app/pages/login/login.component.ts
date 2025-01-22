import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.services';
import { auth } from './interface/auth';


@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  providers: [ApiService],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  public login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onLogin() {
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
  }
}
