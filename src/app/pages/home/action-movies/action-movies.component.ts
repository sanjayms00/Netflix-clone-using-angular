import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent implements OnInit {
  
  constructor(private service: MovieApiServiceService){
  }

  ngOnInit(): void {
    this.action()
  }

  actionMovies : movie[] = []

  //action movies list
  action(){
    this.service.actionMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.actionMovies = result.results;
    })
  }


}
