import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
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
    confirmPassword: ''
  }
  constructor(private http: HttpClient,private messageService: MessageService) { }

  ngOnInit(): void {

  }
  onSubmit(Signup : any){
    console.log('Signup----',Signup.value);
    if(Signup.value.password !== Signup.value.confirmPassword) {
      this.messageService.add({severity:'warn', summary:'Password Error', detail:'Password & confirm password does not match.'});
    } else {
      const headers = { 'Access-Control-Allow-Origin': '*' };
      this.http.post<any>('http://localhost:8000/addemployee', Signup.value, {headers}).subscribe(data => {
        this.messageService.add({severity:'success', summary:'Add User', detail:'User added succesfully.'});
          })
    }
    
   }

}
