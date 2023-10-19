import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-animation-movies',
  templateUrl: './animation-movies.component.html',
  styleUrls: ['./animation-movies.component.css']
})
export class AnimationMoviesComponent implements OnInit {

  animationMovies: movie[] = []
  
  constructor(private service: MovieApiServiceService){}

  ngOnInit(): void {
    this.animation()
  }

  //animation movies list
  animation(){
    this.service.animationMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.animationMovies = result.results;
    })
  }
  

}
