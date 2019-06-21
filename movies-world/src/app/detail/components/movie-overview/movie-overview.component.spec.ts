import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverviewComponent } from './movie-overview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MovieOverviewComponent', () => {
  let component: MovieOverviewComponent;
  let fixture: ComponentFixture<MovieOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieOverviewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
