import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";



  //bannerApiData

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  // Trending Movie Data

  trendingApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  // Search Movie
  getSearchMovieApi(data: any): Observable<any> {
    console.log(data, '-----api calls')
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }
  // Movie Details
  getMovieDetails(movieId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  } 
  // Movie Video
  getMovieVideo(movieId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }
  // Movie Casts
  getMovieCasts(movieId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }
  // Action Movies
  getActionMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }
  // Adventure Movies
  getAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }
  // Anime Movies
  getAnimeMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }
  // Comedy Movies
  getComedyMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }
  // Documentary Movies
  getDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }
  // Science Movies
  getScienceMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }
  // Thriller Movies
  getThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }

}
