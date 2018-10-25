import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {SearchService} from '../search.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.css']
})
export class SearchSmartComponent implements OnInit {
  query="";
 
  movieList="";
  
  errorMsg;
  constructor(private searchService:SearchService,private router:Router){     
  }
  ngOnInit(){
    //this.router.navigate(['/search',this.query]);
    }
  ngAfterViewChecked(){
    this.searchService.getMovies(this.query)
      .subscribe(data=>this.movieList=data,
      error=>this.errorMsg=error);
  }
  @Output() sendToHeader =new EventEmitter<string>();
  onReceiving(queryFromChild:string){
    this.query=queryFromChild;
    
    this.sendToHeader.emit(this.movieList);
    //console.log(this.query);
    //this.router.navigate(['/search',this.query]);
    
      console.log(this.movieList);
  }
  

}
