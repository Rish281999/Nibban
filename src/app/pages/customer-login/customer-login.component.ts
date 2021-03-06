import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  hide = true;
  userLoginForm ! : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('',[Validators.required]),
      message : new FormControl('')
  
    });
  }

}
