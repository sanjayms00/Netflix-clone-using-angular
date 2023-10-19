import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/model/movieModel';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.css']
})
export class CastsComponent {

  @Input()
  movieCast: Actor[] = []

}
