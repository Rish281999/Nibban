import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  companyName = 'Nibban News Media Pvt. Ltd.'
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(){
    console.log("Subcribed!");
  }

}
