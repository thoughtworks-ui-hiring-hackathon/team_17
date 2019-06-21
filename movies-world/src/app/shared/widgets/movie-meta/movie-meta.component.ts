import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-meta',
  templateUrl: './movie-meta.component.html',
  styleUrls: ['./movie-meta.component.scss']
})
export class MovieMetaComponent implements OnInit {

  @Input() genre: string;
  @Input() cast: string;
  @Input() director: string;

  constructor() { }

  ngOnInit() {
  }

}
