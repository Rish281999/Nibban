import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  public subscriptionForm ! : FormGroup

  constructor() { }

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
      mobile_no : new FormControl('', [Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      profession : new FormControl('', [Validators.required]),

    });
  }

}
