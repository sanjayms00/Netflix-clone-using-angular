import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-documentary-movies',
  templateUrl: './documentary-movies.component.html',
  styleUrls: ['./documentary-movies.component.css']
})
export class DocumentaryMoviesComponent implements OnInit {

  documentaryMovies: movie[] = []

  constructor(private service: MovieApiServiceService){}

  ngOnInit(): void {
    this.documentary()
  }

  //documentary movies list
  documentary(){
    this.service.documentaryMovies().subscribe((result)=>{
      // console.log(result, '#trendingMoviesList')
      this.documentaryMovies = result.results;
    })
  }

}
