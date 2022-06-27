import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../shared/contactus.service'
import { FormGroup, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm ! : FormGroup

  constructor(public service: ContactusService, private formBuilder : FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fullName : new FormControl('', Validators.required),
      email : new FormControl('',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      message : new FormControl('')
  
    });
  
  }

  getemail(val:any){
    console.log(val)

  }

  onClear(){
    this.contactForm.reset();
    
  }

  onSubmit(){
    if(this.contactForm.valid){
      this.service.postContactUser(this.contactForm.value).subscribe({
        next:(res)=>{
          this.snackBar.open("Thank you")
          this.contactForm.reset();
        },
        error:()=>{
          alert("Error while submitting")
        }
      }) 
    }
  }
}