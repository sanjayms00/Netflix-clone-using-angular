import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryMoviesComponent } from './documentary-movies.component';

describe('DocumentaryMoviesComponent', () => {
  let component: DocumentaryMoviesComponent;
  let fixture: ComponentFixture<DocumentaryMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentaryMoviesComponent]
    });
    fixture = TestBed.createComponent(DocumentaryMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
