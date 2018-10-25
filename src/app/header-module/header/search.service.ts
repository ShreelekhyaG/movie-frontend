import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _url:string="https://api.themoviedb.org/3/search/movie?api_key=789d0ecfc7e14783a33a7e3e07e024db&query=Jack+Reacher";
  //"localhost:8080/movie-service2/movie-api/v1/movie/";
  //"/assets/data/courses.json";
  constructor(private http:HttpClient){

  }
  getMovies():Observable<any>{
    //return ["c1fromservice","c2","c3"];
    return this.http.get(this._url).pipe(catchError(this.errorHandler));
}
errorHandler(error:HttpErrorResponse){
  return throwError(error.message||"Server error");
}
}
