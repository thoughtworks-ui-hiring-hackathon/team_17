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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RatingComponent,
    HomeComponent,
    DiscoverComponent,
    DetailComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
