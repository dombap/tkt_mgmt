import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login = {
    Email : '',
    Password : ''
  }
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm : any){
    console.log('loginform----',loginForm.value);
    const headers = { 'Access-Control-Allow-Origin': '*' };
    this.http.get<any>('http://localhost:8000/login',loginForm.value,).subscribe(data => {
     console.log(data);
  })
   }
 
   reset(loginform : any) {
     loginform.reset();
   }
   
   signup(){
    this.router.navigateByUrl('/signup');
   }

}
