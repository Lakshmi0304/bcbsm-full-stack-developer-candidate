import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = false;
  private loginApiUrl = environment.apiUrl + 'login';
  
   constructor(private router: Router,private http: HttpClient) {}
 
   validateLogin(username: string, password: string): void {  
     
     this.http.post(this.loginApiUrl, {username,password}, { responseType: 'text' }).subscribe(
       (response: any) => {
         console.log('Login successful:');
         this.loggedIn = true;  
       },
       (error: any) => {         
         console.error('Login error:', error);
         this.loggedIn = false;
       }
     );     
   } 
   
   isLoggedIn(): boolean {
     return this.loggedIn;
   }
 }
 
