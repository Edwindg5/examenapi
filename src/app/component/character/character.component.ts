import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: ICharacter[] = [];
  meta: any;
  links: any;
  currentPage: number = 1;
  limit: number = 10;

  @Input() character!: ICharacter;
  @Output() characterClicked = new EventEmitter<number>();

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.characterService.getCharacters(page, this.limit).subscribe((response) => {
      this.characters = response.items;
      this.meta = response.meta;
      this.links = response.links;
      this.currentPage = page;
    });
  }
  
  parseKi(ki: string): string {
    return ki ? ki.replace(/\./g, ',') : 'No disponible';
  }

  onClick(characterId: number): void {
    this.characterClicked.emit(characterId);
  }
}
