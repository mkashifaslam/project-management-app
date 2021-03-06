import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AppService } from './services/app.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'signup', component: SignupComponent, data: { title: 'SignUp'} },
  { path: 'home',  component: HomeComponent, data: { title: 'Home' } },
  { path: '',
    redirectTo: '/login',  
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent , data: { title: 'Page Not Found' }}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Angular2FontawesomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
