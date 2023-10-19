import { Component } from '@angular/core';
import { movie } from 'src/app/model/movieModel';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:MovieApiServiceService){}

  ngOnInit(): void {
    this.bannerData();
  }

  bannerResult: any = [];

  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      // console.log(result, 'bannerResult#')
      this.bannerResult = result.results;
    })
  }

}
