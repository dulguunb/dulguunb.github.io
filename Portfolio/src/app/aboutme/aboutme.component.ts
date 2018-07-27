import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  tiles:any[];
  constructor() { }

  ngOnInit() {
    this.tiles = [
      {title: 'About Me', content: 'Hi, My Name is Dulguun' ,image:'https://scontent.fuln7-1.fna.fbcdn.net/v/t1.0-9/27459330_558321701193384_1684160613539778627_n.jpg?_nc_cat=0&oh=b9c0f7e97190c4d6b5904c7c6f9b5778&oe=5BD7400C'},
    ];
  }

}
