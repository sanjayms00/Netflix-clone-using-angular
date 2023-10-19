import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceMoviesComponent } from './science-movies.component';

describe('ScienceMoviesComponent', () => {
  let component: ScienceMoviesComponent;
  let fixture: ComponentFixture<ScienceMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScienceMoviesComponent]
    });
    fixture = TestBed.createComponent(ScienceMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
