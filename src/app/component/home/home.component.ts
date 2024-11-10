import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  handleCharacterSelection(characterId: number): void {
    console.log("Selected Character ID:", characterId);
  }
}

