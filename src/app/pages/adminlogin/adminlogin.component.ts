import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  hide = true;
  adminLoginForm ! : FormGroup
  username = 'admin'
  password = 'admin@123'

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('',[Validators.required]),
      message : new FormControl('')
  
    });
  }

  onSubmit(){
    if(this.adminLoginForm.controls['username'].value === 'admin' && this.adminLoginForm.controls['password'].value === 'admin@123')
    this.router.navigate(['/admindashboard'])
    else{
      alert("unsucessful")
    }
  }

}
