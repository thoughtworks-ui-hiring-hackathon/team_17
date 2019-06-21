import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCatalogService } from './services/movie-catalog.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MovieCatalogService]
})
export class HomeModule { }
