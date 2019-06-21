import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMetaComponent } from './movie-meta.component';

describe('MovieMetaComponent', () => {
  let component: MovieMetaComponent;
  let fixture: ComponentFixture<MovieMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
