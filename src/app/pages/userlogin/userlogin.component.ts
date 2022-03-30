import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
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
