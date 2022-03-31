import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MessageService,ConfirmationService,ConfirmEventType} from 'primeng/api';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css']
})
export class ListAssetComponent implements OnInit {

  constructor(private http: HttpClient, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  asset : any;
  admin: boolean = false;
  display: boolean = false;
  selectedasset : any;
  displayAssign : boolean = false;
  ngOnInit(): void {
    this.getAsset();
    this.admin = localStorage.getItem('admin') ? true : false;
  }
  getAsset(){
    this.http.get<any>('http://localhost:8000/getassets').subscribe(data => {
      this.asset = data
  })
  }
  confirm(id:number) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            // this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
            this.delete(id);
        }
    });
}
delete(id: number){
  let deleteId = { deleteId : id }       
  const headers = { 'Access-Control-Allow-Origin': '*' };
  this.http.post<any>('http://localhost:8000/delasset', deleteId, {headers}).subscribe(data => {
          console.log('data---',data);
          this.messageService.add({severity:'success', summary:'Delete Asset', detail:'Asset deleted succesfully.'});
          this.getAsset(); 
         })
      this.getAsset(); 
      
}

update(asset : any){
  this.display = true;
  this.selectedasset= asset;
  console.log(" selectedasset--45-",this. selectedasset);
  // this.selectedasset.createdBy1 = ticket.created_by_id;
  // this.selectedasset.desc1 = ticket.description;
  // this.selectedasset.createdFor1 = ticket.created_for_id;
  // this.selectedasset.category1 = ticket.category_id;
}


onUpdate(updateForm: any){
  console.log('form---',updateForm);
  console.log("selectedCategory---",this.selectedasset);
  const headers = { 'Access-Control-Allow-Origin': '*' };
  this.http.put<any>('http://localhost:8000/updateasset', this.selectedasset, {headers}).subscribe(data => {
             console.log('data---',data);
             this.messageService.add({severity:'success', summary:'Update Category', detail:'Category updated succesfully.'});
             this.getAsset(); 
            })
  updateForm.reset();
  this.display = false;
}

}
