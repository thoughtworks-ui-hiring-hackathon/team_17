import { Component, OnInit} from '@angular/core';
import { MovieCatalogService } from '../../services/movie-catalog.service';
import { CardData } from 'src/app/shared/models/card.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latestMoviesCardData: CardData[];
  public trendingMoviesCardData: CardData[];
  public popularMoviesCardData: CardData[];

  public latestMovies: Movie[];
  public trendingMovies: Movie[];
  public popularMovies: Movie[];

  public selectedCard?: Movie;

  constructor(private movieCatalogService: MovieCatalogService,private router : Router) { }

  ngOnInit(): void {
    this.subscribeLatestMovies();
    this.subscribePopularMovies();
    this.subscribeTrendingMovies();
  }

  public onCardClick(cardId: string, cardGenre: string) {
    switch (cardGenre) {
      case 'latest':
        this.selectedCard = this.latestMovies.find(movie => movie.id === cardId);
        break;
      case 'trending':
        this.selectedCard = this.trendingMovies.find(movie => movie.id === cardId);
        break;
      case 'popular':
        this.selectedCard = this.popularMovies.find(movie => movie.id === cardId);
        break;
        default:
        this.selectedCard = undefined;
        break;
    }
    // $(`#${this.selectedCard.id}`).modal('toggle');   
  }
  public onLinkClick(cardId: string){
    const url = `/movie-detail/${cardId}`;
    this.router.navigateByUrl(url);
  }
  private subscribeLatestMovies(): void {
    this.movieCatalogService.getLatestMovies().subscribe(movies => {
      this.latestMovies = movies.results;
      this.latestMoviesCardData = this.latestMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        imgUrl: movie.backdrop_path,
        rating: movie.vote_average
      }) as CardData);
    });
  }

  private subscribePopularMovies(): void {
    this.movieCatalogService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies.results;
      this.popularMoviesCardData = this.popularMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        imgUrl: movie.backdrop_path,
        rating: movie.vote_average
      }) as CardData);
    });
  }

  private subscribeTrendingMovies(): void {
    this.movieCatalogService.getTrendingMovies().subscribe(movies => {
      this.trendingMovies = movies.results;
      this.trendingMoviesCardData = this.trendingMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        imgUrl: movie.backdrop_path,
        rating: movie.vote_average
      }) as CardData);
    });
  }
} 
