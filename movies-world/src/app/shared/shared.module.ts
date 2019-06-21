import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpwrapperService } from './services/httpwrapper.service';
import { ApiInterceptor } from './services/api.interceptor';
import { MovieMetaComponent } from './widgets/movie-meta/movie-meta.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpwrapperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
