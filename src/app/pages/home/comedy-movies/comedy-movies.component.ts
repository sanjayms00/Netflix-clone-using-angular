import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-comedy-movies',
  templateUrl: './comedy-movies.component.html',
  styleUrls: ['./comedy-movies.component.css']
})
export class ComedyMoviesComponent implements OnInit {
  
  comedyMovies: movie[] = []

  constructor(private service: MovieApiServiceService){}

  ngOnInit(): void {
    this.comedy()
  }


  //comedy movies list
  comedy(){
    this.service.comedyMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.comedyMovies = result.results;
    })
  }

}
