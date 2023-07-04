import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  get form() { return this.registerForm.controls; }
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid form");
      return;
    }
    
    const registerRequest = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    };

    this.loading = true;   

    this.http.post('http://localhost:8080/api/register', registerRequest).subscribe(
      (response: any) => {        
        console.log('Registration successful:', response);
      },
      (error: any) => { 
        this.loading = false;
        alert('Invalid credentials. Please try again.');   
      }
    );
    this.registerForm.reset();
    this.router.navigate(['/login']);    
  }
}
