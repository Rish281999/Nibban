import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  hide = true;
  username= 'admin';
  password= 'Admin@123'
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.username==='admin' && this.password==='Admin@123'){
    console.log("welcome");
    }else{
      console.log("invalid");
    }
  }

}
