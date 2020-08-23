import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import {dataPipe} from '../app/create-account/DataPipe';
import { AuthGuard } from './login/login-authguarg.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewComponent,
    dataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
