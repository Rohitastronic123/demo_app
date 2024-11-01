import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INDIAN_STATES, StateCity } from '../state-city.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  states: StateCity[] = INDIAN_STATES; // All states with cities
  cities: string[] = []; // Cities based on selected state

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onStateChange(selectedState: string): void {
    console.log('State changed:', selectedState);
    const state = this.states.find(s => s.state === selectedState);
    this.cities = state ? state.cities : [];
    this.signupForm.get('city').reset(); // Reset city field
  }

  submitForm(): void {
    console.log('submitForm called'); // Check if method is executed
    if (this.signupForm.valid) {
      console.log('Form Data:', this.signupForm.value); // Log the entire form data
    } else {
      console.log('Form is invalid');
    }
  }
}
