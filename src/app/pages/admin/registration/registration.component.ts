import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/shared/adminlogin.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  public adminLoginForm ! : FormGroup

  user : User;

  constructor(private router:Router, private service: AdminloginService) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      FirstName : new FormControl('', [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      username : new FormControl('', [Validators.required]),
      UserRole : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    });
  }


}
