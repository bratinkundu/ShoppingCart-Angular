import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  constructor() { }

  search
  ngOnInit(): void {
  }

  getText(text:string) {  
    console.log(text);  
    this.search = text;  
}
}
