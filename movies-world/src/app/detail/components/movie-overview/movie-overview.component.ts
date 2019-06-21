import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  @Input() movieOverview: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }
}
