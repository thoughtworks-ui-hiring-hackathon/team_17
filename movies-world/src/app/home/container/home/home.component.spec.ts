import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MovieCatalogService } from '../../services/movie-catalog.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieCatalogServiceSpy: MovieCatalogService;

  beforeEach(async(() => {
    movieCatalogServiceSpy = jasmine.createSpyObj('MovieCatalogService', ['getLatestMovies', 'getTrendingMovies'])

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ MovieCatalogService, useValue: movieCatalogServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
