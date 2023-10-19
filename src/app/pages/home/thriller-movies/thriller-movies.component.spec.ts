import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillerMoviesComponent } from './thriller-movies.component';

describe('ThrillerMoviesComponent', () => {
  let component: ThrillerMoviesComponent;
  let fixture: ComponentFixture<ThrillerMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThrillerMoviesComponent]
    });
    fixture = TestBed.createComponent(ThrillerMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
