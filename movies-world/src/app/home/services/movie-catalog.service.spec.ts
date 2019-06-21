import { TestBed } from '@angular/core/testing';

import { MovieCatalogService } from './movie-catalog.service';
import { HttpwrapperService } from 'src/app/shared/services/httpwrapper.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieCatalogService', () => {

  let httpServiceSpy: HttpwrapperService;

  beforeEach(() => {
    httpServiceSpy = jasmine.createSpyObj('HttpwrapperService',
      ['get']);

    TestBed.configureTestingModule({
      declarations: [MovieCatalogService],
      imports: [HttpClientTestingModule],
      providers: [{ HttpwrapperService, useValue: httpServiceSpy }]
    });
  });

  afterEach(() => {
    httpServiceSpy = null;
  })

  it('should send latest catalog http request', () => {
    const service = new MovieCatalogService(httpServiceSpy);
    service.getLatestMovies();

    expect(httpServiceSpy.get).toHaveBeenCalled();
  });
});
