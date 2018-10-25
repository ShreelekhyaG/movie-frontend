import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit() {
    this.router.navigate(['/home']);
  }
  @Input('movieList') movieList: string;

}
