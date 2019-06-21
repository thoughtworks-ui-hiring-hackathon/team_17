import { Injectable } from '@angular/core';
import { HttpwrapperService } from 'src/app/shared/services/httpwrapper.service';
import { Endpoint } from 'src/app/shared/constants/endpoint.constant';
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailService {

  constructor(private httpService: HttpwrapperService) { }

  getMovieDetail(id: string): Observable<any> {
    return this.httpService.get(Endpoint.movieDetail(id));
  }

  getSimilarMovies(id: string): Observable<any> {
    return this.httpService.get(Endpoint.similarMovie(id));
  }
}
