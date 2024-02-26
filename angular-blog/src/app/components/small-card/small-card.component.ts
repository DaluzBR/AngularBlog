import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor(){
    
  }

  @Input()
  id: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';

}
