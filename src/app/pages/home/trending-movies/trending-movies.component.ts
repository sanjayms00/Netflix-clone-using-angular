import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {

  constructor(private service: MovieApiServiceService){
  }

  ngOnInit(): void {
    this.trendingMovies()
  }

  trendingMoviesList : movie[] = [];
    //trending movies list
    trendingMovies(){
      this.service.trendingMovies().subscribe((result)=>{
        //console.log(result, '#trendingMoviesList')
        this.trendingMoviesList = result.results;
      })
    }

}
