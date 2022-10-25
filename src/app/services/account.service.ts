import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }


  Login(){
    let body = new URLSearchParams();
        body.set('Username', 'Admin');
        body.set('password', 'admin');        
        body.set('grant_type', 'password');
        debugger

     return  this.http.post('https://localhost:44397/token',body, {headers:{'content-type':'x-www-form-urlencoded' }})
    }


  register(){
    let body= 
      {
        "Username": "Sunil",
        "password": "Az@123456789",
        "confirmPassword": "Az@123456789",
        "Role":"Admin"
       }
       debugger
    return  this.http.post('https://localhost:44397/api/Account/Register', body, {headers: {'content-type':'application/json'}})
  }  
}
