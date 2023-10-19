import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMoviesComponent } from './action-movies.component';

describe('ActionMoviesComponent', () => {
  let component: ActionMoviesComponent;
  let fixture: ComponentFixture<ActionMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionMoviesComponent]
    });
    fixture = TestBed.createComponent(ActionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
