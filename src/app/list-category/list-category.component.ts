import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  category : any;
  selectedCategory : any;
  display: boolean = false;
  constructor(private messageService: MessageService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getcategories();

  }
  getcategories(){
    this.http.get<any>('http://localhost:8000/getallcategories').subscribe(data => {
      this.category = data
  })
  }

  delete(id: number){
         let deleteId = { deleteId : id }       
         const headers = { 'Access-Control-Allow-Origin': '*' };
         this.http.post<any>('http://localhost:8000/delcategory', deleteId, {headers}).subscribe(data => {
                 console.log('data---',data);
                 this.messageService.add({severity:'success', summary:'Delete Category', detail:'Category deleted succesfully.'});
                 this.getcategories(); 
                })
             this.getcategories(); 
  }

  update(category : any){
      this.display = true;
      this.selectedCategory = category;
      this.selectedCategory.name1 = category.name;
      this.selectedCategory.desc1 = category.desc;
      console.log("selectedCategory--45-",this.selectedCategory);
  }
  
  onUpdate(updateForm: any){
    console.log('form---',updateForm);
    console.log("selectedCategory---",this.selectedCategory);
    const headers = { 'Access-Control-Allow-Origin': '*' };
    this.http.put<any>('http://localhost:8000/updateCategory', this.selectedCategory, {headers}).subscribe(data => {
               console.log('data---',data);
               this.messageService.add({severity:'success', summary:'Update Category', detail:'Category updated succesfully.'});
               this.getcategories(); 
              })
    updateForm.reset();
    this.display = false;
  }

  reset(form: any){
    form.reset();
  }
}
