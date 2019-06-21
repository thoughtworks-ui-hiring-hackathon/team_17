import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './container/detail/detail.component';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { PosterComponent } from './components/poster/poster.component';
import { MovieDetailService } from './services/movie-detail.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MovieDetailService]
})
export class DetailModule { }
