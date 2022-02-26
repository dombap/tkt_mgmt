import { Component, OnInit } from '@angular/core';
import { ticket } from '../models/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  Ticket : ticket = {
    createdBy: '',
    createdFor: '',
    category:'',
    description:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(Signup : any){
    console.log('Signup----',Signup.value);
  }
}
