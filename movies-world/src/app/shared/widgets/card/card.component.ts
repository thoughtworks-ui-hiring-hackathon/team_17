import { Input,Output, Component, OnInit ,EventEmitter} from '@angular/core';
import { CardData } from 'src/app/shared/models/card.model';

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
  @Output('card-click') public onCardClick : EventEmitter<string> = new EventEmitter();
  @Output('link-click') public onLinkClick : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //
  }

  public onClick(source: string){
    source === 'card' ? this.onCardClick.emit(this.dataVal.id) : this.onLinkClick.emit(this.dataVal.id);
  }

}
