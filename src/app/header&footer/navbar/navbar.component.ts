import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  companyName = 'Nibban News Media Pvt. Ltd.'
  email = 'test@gmail.com'
  phoneNo = '1234567890'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.router.navigate(['/contact']);
  // }

}
