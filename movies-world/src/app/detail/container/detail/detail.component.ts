import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../../services/movie-detail.service';
import { MovieDetail } from 'src/app/shared/models/movie-detail.model';
import { ActivatedRoute } from '@angular/router';
import { CardData } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movieDetail: MovieDetail;
  similarMovies: any;

  constructor(private movieDetailService: MovieDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscribeMovieDetail(id);
    this.subscribeSimilarMovie(id);
  }

  private subscribeMovieDetail(id: string): void {
    this.movieDetailService.getMovieDetail(id).subscribe(detail => {
      this.movieDetail = detail;
    });
  }

  private subscribeSimilarMovie(id: string): void {
    this.movieDetailService.getSimilarMovies(id).subscribe(movies => {
      this.similarMovies = movies.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        imgUrl: movie.backdrop_path,
        rating: movie.vote_average
      }) as CardData);
    });
  }

  get genres(): string {
    return this.movieDetail.genres.map(x => x.name).join(',')
  }

  get cast(): string {
    return '';
  }
}
