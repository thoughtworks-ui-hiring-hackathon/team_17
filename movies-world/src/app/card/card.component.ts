import { Input,Output, Component, OnInit } from '@angular/core';

interface CardData{
  title: string;
  description: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public dataVal!: CardData;

  @Input('data') public set data(value: CardData) {
    this.dataVal = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
