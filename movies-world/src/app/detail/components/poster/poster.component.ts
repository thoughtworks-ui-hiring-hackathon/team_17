import { Component, OnInit, Input } from '@angular/core';
import { Endpoint } from 'src/app/shared/constants/endpoint.constant';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() posterImageURL: string
  image: string;

  constructor() { }

  ngOnInit(): void {
    this.image = Endpoint.getOriginalImage(this.posterImageURL);
  }
}
