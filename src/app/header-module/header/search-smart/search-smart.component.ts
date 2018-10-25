import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.css']
})
export class SearchSmartComponent implements OnInit {
  query="";
 
  movieList=[];
  errorMsg;
  constructor(private searchService:SearchService){     
  }
  ngOnInit(){
    
    }
  onReceiving(queryFromChild:string){
    this.query=queryFromChild;
    console.log(this.query);
    this.searchService.getMovies()
    .subscribe(data=>this.movieList=data,
     error=>this.errorMsg=error);
     console.log(this.movieList);
  }

}
