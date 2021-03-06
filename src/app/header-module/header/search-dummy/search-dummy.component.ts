import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-dummy',
  templateUrl: './search-dummy.component.html',
  styleUrls: ['./search-dummy.component.css']
})
export class SearchDummyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  query="";
  @Output() sendToSmarty =new EventEmitter<string>();
  search(){
    this.sendToSmarty.emit(this.query);
   // this.router.navigate(['/search',this.query]);
  }

}
