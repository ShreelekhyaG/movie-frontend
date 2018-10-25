import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-cruiser-front';
  movieList="mn";
  onReceiving(movieL:string){
    this.movieList=movieL;
    console.log(this.movieList);
  }
  send(){
    return this.movieList;
  }
}
