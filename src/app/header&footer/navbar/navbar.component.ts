import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubscriptionFormComponent } from 'src/app/pages/subscription-form/subscription-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  companyName = 'Nibban News Media Pvt. Ltd.'
  email = 'test@gmail.com'
  phoneNo = '1234567890'
  
  constructor(private router: Router, private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(SubscriptionFormComponent, {
      width:'45%'
    });
  }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.router.navigate(['/contact']);
  // }

}
