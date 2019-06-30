import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import * as firebase from 'firebase/app'
import 'firebase/auth' 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: FormGroup;
  constructor(public fb: FormBuilder) {
    this.myform=this.fb.group({
      'firstname':['',[ Validators.required]],
      'lastname':['',[ Validators.required]],
      'email':['',[ Validators.required]],
      'password':['',[ Validators.required , Validators.minLength(8)]],
      'confirmpassword': ['',[ Validators.required]]})
  }

 onsubmit(signupform){
   let email : string =signupform.value.email;
   let password : string = signupform.value.password;
   let firstname : string = signupform.value.firstname;
   let lastname : string = signupform.value.lastname;
   let randomnumber = Math.floor(Math.random());
   firebase.auth().createUserWithEmailAndPassword(email, password).then((response)=>{
     console.log(response);

     response.user.updateProfile({
       displayName : firstname + " " + lastname
       photoURL : "http://api.adorable.io/avatars/" 
     })
   }).catch((error=>{
     console.log(error)
   }))

 }

  ngOnInit() {
  }

}