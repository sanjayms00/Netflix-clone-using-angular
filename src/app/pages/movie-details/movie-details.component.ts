import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieVideo : any;
  movieCast: any;
  constructor(private router:ActivatedRoute, private service:MovieApiServiceService){}
  
  ngOnInit(){
    let movieId: string | null = this.router.snapshot.paramMap.get('id')
    // console.log(movieId)
    this.movieDetail(movieId);
    this.getVideo(movieId);
    this.getCast(movieId);
  }

  movieData:any;

  //detail page movie
  movieDetail(movieId: string | null){
      this.service.detailedMovieData(movieId).subscribe((result)=>{
        this.movieData = result
        console.log(this.movieData)
      })
  }

  //get video
  getVideo(id: any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      // console.log(result, '#video')
      result.results.forEach((element:any) => {
        if(element.type === 'Trailer'){
          this.movieVideo = element.key;
        }
      });
    })
  }

  //get cast
  getCast(id: any){
    this.service.getMovieCast(id).subscribe((result)=>{
      // console.log(result, '#cast')
      this.movieCast = result.cast;
    })
  }

}
