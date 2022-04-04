import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/shared/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  hide = true;
  public adminLoginForm ! : FormGroup
  // isAuthenticated = false;

  constructor(private router:Router, private service: AdminloginService) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('',[Validators.required]),
    });
  }

  // onSubmit(){
  //   if(this.adminLoginForm.controls['username'].value === 'admin' && this.adminLoginForm.controls['password'].value === 'admin@123')
  //   this.router.navigate(['/admindashboard'])
  //   else{
  //     alert("unsucessful")
  //   }
  // }


  getAdminLogin(){
    this.service.getAdminLogin().subscribe(
      res=>{
        const admin = res.find((a:any)=>{
        return a.username === this.adminLoginForm.value.username && a.password === this.adminLoginForm.value.password
        });
        if(admin){
          this.adminLoginForm.reset();
          this.router.navigate(['admindashboard'])
        }else{
          alert("Invalid username or password");
        }
        },error=>{
          alert("Something went wrong")
        })
  }

  

}
