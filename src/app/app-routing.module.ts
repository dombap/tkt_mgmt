import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import{HomeComponent} from './home/home.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';


const routes: Routes = [
  { path: 'addCategory', component: CreateCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'listCategory', component: ListCategoryComponent },
  { path: 'ticketform', component: TicketFormComponent },
  { path: '', component: HomeComponent },
  {path: 'listticket', component: ListTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
