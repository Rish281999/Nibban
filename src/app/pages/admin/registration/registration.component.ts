import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/shared/adminlogin.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  public adminLoginForm ! : FormGroup

  constructor(private router:Router, private service: AdminloginService) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('',[Validators.required]),
      cpassword : new FormControl('',[Validators.required]),
      user_role : new FormControl('',[Validators.required]),

    });
  }


}
