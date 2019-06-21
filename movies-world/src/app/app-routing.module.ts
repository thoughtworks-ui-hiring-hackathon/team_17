import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/container/home/home.component';
import { DetailComponent } from './detail/container/detail/detail.component';
import { DiscoverComponent } from './discover/container/discover/discover.component';
import { ActorDetailComponent } from './actor-detail/container/actor-detail/actor-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: DiscoverComponent },
  { path: 'movie-detail', component: DetailComponent },
  { path: 'actor-detail', component: ActorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
