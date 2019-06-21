import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from 'src/app/shared/constants/endpoint.constant';
import { Movie } from 'src/app/shared/models/movie.model';
import { HttpwrapperService } from 'src/app/shared/services/httpwrapper.service';

@Injectable()
export class MovieCatalogService {

  constructor(private httpService: HttpwrapperService) { }

  getLatestMovies(): Observable<Movie[]> {
    return this.httpService.get(Endpoint.latestMovies);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.httpService.get(Endpoint.popularMovies);
  }

  getTrendingMovies(): Observable<Movie[]> {
    return this.httpService.get(Endpoint.trendingMovies);
  }
}
