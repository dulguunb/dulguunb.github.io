import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})

export class BasicInfoComponent implements OnInit {
  yAxis: number = 30;
  constructor() { }
  tiles:any[];
  images:any[];
  ngOnInit() {
    this.tiles = [ 
      {texts: [" I am glad you're here :)"], title:'Hello World!',
       cols: 1,  
       rows: 3,
       top: 4,
       left: 0,
       right: 0,
       bottom: 0,
       direction: -1,
       background: 'assets/a1/astr1-background.png',
       images: ['assets/a1/rocket1.png']
      },
      {title:'Who is drifting in the space?',
      texts: ["Hi, My name is Dulguun. I am currently pursuing a Bachelor of Computer Science."
              ,"I'm fond of creating web/mobile/desktop applications. I can create mid-sized web applications (including front and back-ends).", 
              "I am well versed with: Angular, Nodejs, C++, Python, [JavaFX,JPA], LAMP Stack , MEAN stack"],  
      cols: 1,  
      rows: 3,
      top: 0,
      left: 0,
      right: 2,
      bottom: 0,
      direction: -1,
      background: 'assets/a1/astr1-background.png',
      images: [
      'assets/a1/astr1-dulguun1.png',
      'assets/a1/astr1-dulguun2.png',
      'assets/a1/astr1-dulguun3.png']
     },
    ];
  }
  ngOnDestroy() {
  }
  @HostListener("window:scroll", ['$event'])
  onScroll(event) {
    this.yAxis = (event.pageY);
  }
}
