import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() public data: number;

  public starData = ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'];
  public rating;
  constructor() { }

  ngOnInit() {
    this.rating = (this.data <= 10) ? this.data / 2 : 5;
    this.starData = this.starData.map((data, i) => (i + 1 <= this.rating) ? `${data} checked` : data);
  }

}
