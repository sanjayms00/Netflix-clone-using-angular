import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureMoviesComponent } from './adventure-movies.component';

describe('AdventureMoviesComponent', () => {
  let component: AdventureMoviesComponent;
  let fixture: ComponentFixture<AdventureMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdventureMoviesComponent]
    });
    fixture = TestBed.createComponent(AdventureMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
