import { Component, OnInit } from '@angular/core';
import { MovieCatalogService } from '../../services/movie-catalog.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latestMovies: Movie[];
  trendingMovies: Movie[];
  popularMovies: Movie[];


  constructor(private movieCatalogService: MovieCatalogService) { }

  ngOnInit(): void {
    this.subscribeLatestMovies();
    this.subscribePopularMovies();
    this.subscribeTrendingMovies();
  }

  private subscribeLatestMovies(): void {
    this.movieCatalogService.getLatestMovies().subscribe(movies => {
      this.latestMovies = movies;
    });
  }

  private subscribePopularMovies(): void {
    this.movieCatalogService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies;
    });
  }

  private subscribeTrendingMovies(): void {
    this.movieCatalogService.getTrendingMovies().subscribe(movies => {
      this.trendingMovies = movies;
    });
  }
}
