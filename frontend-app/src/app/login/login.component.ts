import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  isLoggedIn = false;
  get form() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;  
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
  
    this.authenticationService.validateLogin(username, password);    

    this.http.post('http://localhost:8080/api/login', { username, password }, { responseType: 'text' }).subscribe(
      (response: any) => {        
        console.log("success");
        this.router.navigate(['/document']);
      },
      (error: any) => {
        this.loading = true;        
        alert('Invalid credentials. Please try again.');
        this.loginForm.reset();
      }
    ); 
  }
  
  }


