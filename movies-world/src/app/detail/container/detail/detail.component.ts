import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../../services/movie-detail.service';
import { MovieDetail } from 'src/app/shared/models/movie-detail.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movieDetail: MovieDetail;

  constructor(private movieDetailService: MovieDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscribeMovieDetail('299537');
  }

  private subscribeMovieDetail(id: string): void {
    this.movieDetailService.getMovieDetail(id).subscribe(detail => {
      this.movieDetail = detail;
    });
  }

  get genres(): string {
    return this.movieDetail.genres.map(x => x.name).join(',')
  }

  get cast(): string {
    return '';
  }
}
