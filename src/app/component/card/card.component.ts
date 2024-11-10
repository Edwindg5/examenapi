import { Component } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() character: any = {
    name: '',
    imageUrl: '',
    species: '',
    role: ''
  };

}
