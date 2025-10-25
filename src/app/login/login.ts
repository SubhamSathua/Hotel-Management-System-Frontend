import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, HttpClientModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginInput = { email: '', password: '' };
  loginMsg = '';
  submitted = false;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
     // Simple patterns for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic validation before sending to backend
    if (!this.loginInput.email || !this.loginInput.password) {
      this.loginMsg = 'All fields are required.';
      return;
    }

    if (!emailPattern.test(this.loginInput.email)) {
      this.loginMsg = 'Invalid email address.';
      return;
    }


    this.http.post('http://localhost:8080/api/login', this.loginInput).subscribe({
      next: (res) => {
        const result = res as any;

        if (result.status === 'success') {
          switch (result.role) {
            case 'ADMIN':
              this.router.navigate(['/adminDashboard']);
              break;
            case 'MANAGER':
              this.router.navigate(['/manager-dashboard']);
              break;
            case 'RECEPTION':
              this.router.navigate(['/receptionDashboard']);
              break;
            case 'CUSTOMER':
              this.router.navigate(['/customerDashboard']);
              break;
            default:
              this.loginMsg = 'Unknown role';
          }
        } else {
          this.loginMsg = result.message;
        }
      },
      error: () => {
        this.loginMsg = 'Server error';
      }
    });
  }
}
