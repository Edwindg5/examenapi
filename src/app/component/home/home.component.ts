import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { DragonBallService } from '../../services/dragon-ball.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: any[] = [];

  constructor(private dragonBallService: DragonBallService) {}

  ngOnInit(): void {
    this.dragonBallService.getCharacters().subscribe(
      (data) => {
        this.characters = data;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }
}