import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm : FormGroup;
  constructor() { }

  ngOnInit() {
   this.registerForm = new FormGroup({
     "sushFirstName": new FormControl(),
     "sushLastName": new FormControl(null,Validators.required),
     "sushEmail": new FormControl(null,Validators.email),
     "sushPassword": new FormControl("sushm"),
     "sushCheck": new FormControl()
   });
  }

  handleForm(){
if(true){
  this.save();
}

  }
 save(){
  console.log("clicked ");
  console.log("reg", this.registerForm);
   if(this.registerForm.status=='VALID'){
     console.log("Form is Valid")
   }else{
     console.log("Form is not valid");
   }
 
 }
}
