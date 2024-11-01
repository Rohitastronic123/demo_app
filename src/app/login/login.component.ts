import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit() {
   
  }

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required]] // Password validation
    });
  }

  onLogin() {
    console.log('Login method called'); // Debug log
    if (this.loginForm.valid) {
      const formData = this.loginForm.value; // Get form data
      console.log('Login Data:', formData); // Log data to console
      // Here you can handle the login logic (e.g., API call)
    } else {
      console.log('Form is invalid');
      console.log('Form Errors:', this.loginForm.errors); // Log errors if needed
    }
  }
}
