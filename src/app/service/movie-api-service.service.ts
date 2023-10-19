import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl  = 'https://api.themoviedb.org/3';
  apikey  =  '08cc33bd5ae3a747598ce2ad84376e66'

  //banner api data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // trending movie api data
  trendingMovies(): Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }

  //get searched movie
  searchedMovie(data: string):Observable<any>{
    // return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&&query=${data}`)
  }

  //detailed movie
  detailedMovieData(data: string | null):Observable<any>{
      return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  //get movie video
  getMovieVideo(data: any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //movie cast
  getMovieCast(data: any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //action movies
  actionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=28`)
  }

  //adventure
  adventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=12`)
  }

  //animation
  animationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=16`)
  }

  //comedy
  comedyMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=35`)
  }

  //documentary
  documentaryMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=99`)
  }

  //science
  scienceMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=878`)
  }

  //thriller
  thrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&&with-genres=53`)
  }

}
