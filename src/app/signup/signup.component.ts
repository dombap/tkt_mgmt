import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(Signup : any){
    console.log('Signup----',Signup.value);
    //  const headers = { 'Access-Control-Allow-Origin': '*' };
    // this.http.post<any>('http://localhost:8000/addemployee', Signup.value, {headers}).subscribe(data => {
            // console.log('data---',data);
        // })
   }

}
