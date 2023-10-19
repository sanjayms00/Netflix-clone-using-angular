import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-thriller-movies',
  templateUrl: './thriller-movies.component.html',
  styleUrls: ['./thriller-movies.component.css']
})
export class ThrillerMoviesComponent implements OnInit {

  thrillerMovies :movie[] = []

  constructor(private service: MovieApiServiceService){
  }

  ngOnInit(): void {
    this.thriller()
  }

  //thriller movies list
  thriller(){
    this.service.thrillerMovies().subscribe((result)=>{
      // console.log(result, '#thrillerMoviesList')
      this.thrillerMovies = result.results;
    })
  }

}
