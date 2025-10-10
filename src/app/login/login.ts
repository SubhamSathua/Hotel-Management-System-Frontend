import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminDashboard } from '../admin-dashboard/admin-dashboard';
import { ReceptionDashboard } from '../reception-dashboard/reception-dashboard';
import { CustomerDashboard } from '../customer-dashboard/customer-dashboard';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, HttpClientModule, CommonModule, FormsModule, AdminDashboard, ReceptionDashboard, CustomerDashboard],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
    title = 'Hotel Login';
  currentView = 'login'; // default view


  loginInput = {
    email: '',
    password: ''
  };

  loginMsg = '';
   constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:8080/api/login', this.loginInput).subscribe({
      next: (res) => {
        const result = res as any;

        if (result.status === 'success') {
          // Navigate to respective dashboard based on role
          switch(result.role) {
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
          // Backend returned login failure
          this.loginMsg = result.message;
        }
      },
      error: (err) => {
        // Network/server error
        this.loginMsg = 'Server error';
      }
    });
  }

}
