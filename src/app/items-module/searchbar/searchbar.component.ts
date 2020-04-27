import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }
  searchText
  @Output() textChange:EventEmitter<string> = new EventEmitter<string>()
  ngOnInit(): void {
  }
  updateText(text){
    this.textChange.emit(text)
  }

}
