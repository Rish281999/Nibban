import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'warn' }
  }]
})
export class SubscriptionFormComponent implements OnInit {
  public subscriptionForm ! : FormGroup

  constructor() { }

  OnlyNumbersAllowed(event:any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;

    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      console.log('charCode Restricted is '+ charCode);
      return false;
    }
    return true;

  }

  ngOnInit(): void {
    this.subscriptionForm = new FormGroup({
      FirstName : new FormControl('', [Validators.required]),
      MiddleName : new FormControl('', [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      state : new FormControl('', [Validators.required]),
      district : new FormControl('', [Validators.required]),
      house : new FormControl('', [Validators.required]),
      street : new FormControl('', [Validators.required]),
      landmark : new FormControl('', [Validators.required]),
      pincode : new FormControl('', [Validators.required]),
      mobile_no : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email : new FormControl('',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      gender : new FormControl('', [Validators.required]),
      profession : new FormControl('', [Validators.required]),

    });
  }

}
