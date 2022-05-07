import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
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
