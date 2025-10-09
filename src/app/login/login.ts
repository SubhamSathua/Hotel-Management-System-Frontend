import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  // login() {
  //   throw new Error('Method not implemented.');
  // }
  // password: any;
  // username: any;

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const loginData = { username: this.username, password: this.password };

    this.http.post('http://localhost:8080/api/login', loginData)
      .subscribe(
        (response: any) => {
          console.log('Login response:', response);
          if (response.role) {
            if (response.role === 'ADMIN') {
              this.router.navigate(['/admin-dashboard']);
            } else if (response.role === 'USER') {
              this.router.navigate(['/user-dashboard']);
            }
          } else {
            alert('Invalid credentials');
          }
        },
        (error) => {
          console.error('Login error:', error);
          alert('Server error or wrong credentials');
        }
      );
  }

}
