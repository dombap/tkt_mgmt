import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  ticket : any;
  selectedticket : any;
  display: boolean = false;
  
  constructor(private messageService: MessageService,private http: HttpClient) { }

  ngOnInit(): void {
   this.gettickets();

    
  }
  gettickets(){
    this.http.get<any>('http://localhost:8000/getticketslist').subscribe(data => {
      this.ticket = data
  })
  }
  delete(id: number){
    let deleteId = { deleteId : id }       
    const headers = { 'Access-Control-Allow-Origin': '*' };
    this.http.post<any>('http://localhost:8000/delticket', deleteId, {headers}).subscribe(data => {
            console.log('data---',data);
            this.messageService.add({severity:'success', summary:'Delete ticket', detail:'ticket deleted succesfully.'});
            this.gettickets(); 
           })
        this.gettickets(); 
}
  update(ticket : any){
      this.display = true;
      this. selectedticket= ticket;
      this. selectedticket.name1 = ticket.name;
      this. selectedticket.desc1 = ticket.desc;
      console.log(" selectedticket--45-",this. selectedticket);
  }

  onUpdate(updateForm: any){
    console.log('form---',updateForm);
    console.log("selectedCategory---",this.selectedticket);
    const headers = { 'Access-Control-Allow-Origin': '*' };
    this.http.put<any>('http://localhost:8000/updateCategory', this.selectedticket, {headers}).subscribe(data => {
               console.log('data---',data);
               this.messageService.add({severity:'success', summary:'Update Category', detail:'Category updated succesfully.'});
               this.gettickets(); 
              })
    updateForm.reset();
    this.display = false;
  }
  reset(form: any){
    form.reset();
  }




}
