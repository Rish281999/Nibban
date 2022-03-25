import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  directorDetails = [
    {
      id:1,
      directorImg: "../../../assets/director1.png",
      directorName: "Mrs. Teresa Prakash Sonawane",
      position: "Director",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
      id:2,
      directorImg: "../../../assets/director2.png",
      directorName: "Mr. Premratna Choukekar",
      position: "Director",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }

    // {
    //   id:3,
    //   directorImg: "../../../assets/banner3.jpg",
    //   directorName: "XYZ",
    //   position: "Director",
    //   content: "Lorem Epsam3"
    // }
  ]
}
