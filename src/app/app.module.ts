import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import {DropdownModule} from 'primeng/dropdown';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    LoginComponent,
    SignupComponent,
    ListCategoryComponent,
    TicketFormComponent,
    HomeComponent,
    ListTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ToastModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule,
    RouterModule,
    DropdownModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
