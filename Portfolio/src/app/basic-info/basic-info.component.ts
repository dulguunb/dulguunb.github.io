import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})

export class BasicInfoComponent implements OnInit {
  rightAstr: any = 0;
  leftAstr:  any = 0;
  firstAstr: number = 3;
  secondAstr: number = 4;
  constructor() { }
  tiles:any[];
  images:any[];
  ngOnInit() {
    this.tiles = [ 
      {text: 'Hi, My name is Dulguun', title:'About me',
       cols: 1,  
       rows: 2, 
       direction: -1,
       background: 'assets/a1/astr1-background.png',
       images: ['assets/a1/astr1-dulguun2.png']
      },

       {text: '', 
        title:'Page2',
        cols: 1,
        rows: 2,  
        direction: 1,
        background: 'assets/a1/astr2-background.png',
        images: ['assets/a1/astr2-dulguun2.png','assets/a1/astr1-dulguun2.png'],
      },
    ];
  }
  ngOnDestroy() {
  }
  @HostListener("window:scroll", ['$event'])
  onScroll(event) {
    this.leftAstr = event.pageY * 5;
  //  this.rightAstr = event.pageY * 5;
  }
}
