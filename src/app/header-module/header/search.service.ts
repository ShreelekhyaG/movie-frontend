import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _url:string="https://api.themoviedb.org/3/search/movie?api_key=789d0ecfc7e14783a33a7e3e07e024db&query=";
  //"localhost:8080/movie-service2/movie-api/v1/movie/";
  //"/assets/data/courses.json";
  constructor(private http:HttpClient){

  }
  getMovies(name):Observable<any>{
    let movieUrl=this._url.concat(name);
    //console.log(movieUrl);
    return this.http.get(movieUrl).pipe(catchError(this.errorHandler));
}
errorHandler(error:HttpErrorResponse){
  return throwError(error.message||"Server error");
}
private handleError(error: any): Observable<any> {
  console.error('An error occurred', error); // for demo purposes only
  return throwError(error.message || error);
}
}
