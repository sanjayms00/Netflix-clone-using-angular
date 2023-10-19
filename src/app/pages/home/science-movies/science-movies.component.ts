import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-science-movies',
  templateUrl: './science-movies.component.html',
  styleUrls: ['./science-movies.component.css']
})
export class ScienceMoviesComponent implements OnInit {

  scienceMovies: movie[] = []

  constructor(private service: MovieApiServiceService){}

    //science movies list
  ngOnInit(): void {
      this.science()
  }

   science(){
    this.service.scienceMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.scienceMovies = result.results;
    })
  }
}
