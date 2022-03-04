import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup : Signup = {
    firstName: '',
    lastName: '',
    email:'',
    password: '',
    confirmPassword: '',
    pincode: '',
    address: ''
  }
  constructor(private http: HttpClient,private messageService: MessageService,private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit(data : any){
    console.log('Signup----',data);
    if(data.password !== data.confirmPassword) {
      this.messageService.add({severity:'warn', summary:'Password Error', detail:'Password & confirm password does not match.'});
    } else {
      const headers = { 'Access-Control-Allow-Origin': '*' };
      this.http.post<any>('http://localhost:8000/addemployee', data, {headers}).subscribe(data => {
        this.messageService.add({severity:'success', summary:'Add User', detail:'User added succesfully.'});
          })
          this.router.navigateByUrl('/login');
    }
    
   }

   reset() {
   this.signup.firstName = '';
   this.signup.lastName = '';
    this.signup.email ='';
    this.signup.password= '';
    this.signup.confirmPassword = '';
    this.signup.pincode = '';
    this.signup.address = '';
  }

}
