import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { RatingComponent } from './shared/widgets/rating/rating.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/container/home/home.component';
import { DiscoverComponent } from './discover/container/discover/discover.component';
import { DetailComponent } from './detail/container/detail/detail.component';
import { ActorDetailComponent } from './actor-detail/container/actor-detail/actor-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { DetailModule } from './detail/detail.module';
import { MovieOverviewComponent } from './detail/components/movie-overview/movie-overview.component';
import { PosterComponent } from './detail/components/poster/poster.component';
import { MovieMetaComponent } from './shared/widgets/movie-meta/movie-meta.component';
// import '../../node_modules/bootstrap-material-design/js/bootstrapMaterialDesign.js';
// import '../../node_modules/jquery/dist/jquery';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RatingComponent,
    HomeComponent,
    DiscoverComponent,
    DetailComponent,
    ActorDetailComponent,
    NavigationComponent,
    ImagesliderComponent,
    MovieOverviewComponent,
    PosterComponent,
    MovieMetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
