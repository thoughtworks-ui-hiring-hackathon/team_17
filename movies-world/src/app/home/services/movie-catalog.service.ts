import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from 'src/app/shared/constants/endpoint.constant';
import { MovieResponse} from 'src/app/shared/models/movie.model';
import { HttpwrapperService } from 'src/app/shared/services/httpwrapper.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCatalogService {

  constructor(private httpService: HttpwrapperService) { }

  getLatestMovies(): Observable<MovieResponse> {
    return this.httpService.get(Endpoint.latestMovies);
  }

  getPopularMovies(): Observable<MovieResponse> {
    return this.httpService.get(Endpoint.popularMovies);
  }

  getTrendingMovies(): Observable<MovieResponse> {
    return this.httpService.get(Endpoint.trendingMovies);
  }
}
