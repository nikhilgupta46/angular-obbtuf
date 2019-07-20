import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {MyblogsComponent} from './myblogs/myblogs.component';

const routes : Routes = [{
  path : '' , redirectTo :'home' ,pathMatch :'full'},{
    path : 'home' , component :HomeComponent},{
  
  path : 'login' , component : LoginComponent},{


  path : 'signup' , component : SignupComponent
  },{
    path : 'myblogs' , component : MyblogsComponent},
    
    
    {
    path : '**' , redirectTo : 'home' 
  }]
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }