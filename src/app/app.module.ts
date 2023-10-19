import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieApiServiceService } from './service/movie-api-service.service';
import { TrendingMoviesComponent } from './pages/home/trending-movies/trending-movies.component';
import { ActionMoviesComponent } from './pages/home/action-movies/action-movies.component';
import { AdventureMoviesComponent } from './pages/home/adventure-movies/adventure-movies.component';
import { AnimationMoviesComponent } from './pages/home/animation-movies/animation-movies.component';
import { ComedyMoviesComponent } from './pages/home/comedy-movies/comedy-movies.component';
import { DocumentaryMoviesComponent } from './pages/home/documentary-movies/documentary-movies.component';
import { ScienceMoviesComponent } from './pages/home/science-movies/science-movies.component';
import { ThrillerMoviesComponent } from './pages/home/thriller-movies/thriller-movies.component';
import { CastsComponent } from './pages/movie-details/casts/casts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    TrendingMoviesComponent,
    ActionMoviesComponent,
    AdventureMoviesComponent,
    AnimationMoviesComponent,
    ComedyMoviesComponent,
    DocumentaryMoviesComponent,
    ScienceMoviesComponent,
    ThrillerMoviesComponent,
    CastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
