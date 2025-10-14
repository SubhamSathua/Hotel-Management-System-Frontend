import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [RouterLink, FormsModule, HttpClientModule], 
  templateUrl: './register.html',
  styleUrls: ['./register.css'] 
})
export class Register {
  registerInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  registerMsg = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:8080/api/register', this.registerInput).subscribe({
      next: (res) => {
        const result = res as any;
        if (result.status === 'success') {
          this.registerMsg = 'Registration successful!';
          this.router.navigate(['/login']);
        } else {
          this.registerMsg = result.message;
        }
      },
      error: (err) => {
        this.registerMsg = 'Server error';
      }
    });
  }
}
