import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  searchedMovieList : any = '';
  searchedMovieName : string = '';

  searchMovie(movie: string){
    // console.log(movie)
    this.service.searchedMovie(movie).subscribe((result)=>{
      // console.log(result)
      this.searchedMovieName = movie; 
      this.searchedMovieList = result;
    })
  }




}
