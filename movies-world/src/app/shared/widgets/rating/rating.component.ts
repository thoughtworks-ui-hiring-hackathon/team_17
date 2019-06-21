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
    if (this.data <= 10) {
      this.rating = this.data / 2;
    } else {
      this.rating = 5;
    }
    console.log(this.rating);
    this.starData = this.starData.map((data, i) => (i + 1 <= this.rating) ? `${data} checked` : data);
  }

}
