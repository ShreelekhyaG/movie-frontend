import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-dummy',
  templateUrl: './search-dummy.component.html',
  styleUrls: ['./search-dummy.component.css']
})
export class SearchDummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  query="";
  @Output() sendToSmarty =new EventEmitter<string>();
  search(){
    this.sendToSmarty.emit(this.query);
  }

}
