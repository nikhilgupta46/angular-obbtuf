import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
let config = {
    apiKey: "AIzaSyATB_vE19LCfsmIfhf1feh1SsaZ8jtKwQE",
    authDomain: "blog8-48335.firebaseapp.com",
    databaseURL: "https://blog8-48335.firebaseio.com",
    projectId: "blog8-48335",
    storageBucket: "",
    messagingSenderId: "145145660654",
    appId: "1:145145660654:web:3d8e1576395fbf60"
  };
firebase.initializeApp(config)

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
