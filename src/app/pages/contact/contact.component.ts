import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../shared/contactus.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public service: ContactusService) { }

  ngOnInit(): void {
  }

  getemail(val:any){
    console.log(val)

  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }
}
