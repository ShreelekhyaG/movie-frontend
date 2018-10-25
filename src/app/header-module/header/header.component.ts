import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {SearchService} from './search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  query="";
  movieList;
  errorMsg;
  constructor(private searchService:SearchService){     
  }
  ngOnInit(){
    
  }
  @Output() sendToApp =new EventEmitter<string>();
  onReceiving(movieL:string){
    this.movieList=movieL;
    //console.log(this.movieList);
    this.sendToApp.emit(this.movieList);
  }

}
