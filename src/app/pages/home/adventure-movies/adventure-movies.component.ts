import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-adventure-movies',
  templateUrl: './adventure-movies.component.html',
  styleUrls: ['./adventure-movies.component.css']
})
export class AdventureMoviesComponent implements OnInit {
  constructor(private service: MovieApiServiceService){
  }

  adventureMovies: movie[] = []

  ngOnInit(): void {
    this.adventure();
  }

  //adventure movies list
  adventure(){
    this.service.adventureMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.adventureMovies = result.results;
    })
    
  }
}
