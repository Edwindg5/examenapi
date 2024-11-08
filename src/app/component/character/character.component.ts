import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../models/character';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  data: ICharacter[] = [];  
  pageDetails: any;        
  navigationLinks: any;   
  currentPage: number = 1;
  itemsPerPage: number = 10;

  @Input() charDetail!: ICharacter;
  @Output() selectedCharacter = new EventEmitter<number>();

  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.service.retrieveCharacters(page, this.itemsPerPage).subscribe((response) => {
      this.data = response.items;
      this.pageDetails = response.meta;
      this.navigationLinks = response.links;
      this.currentPage = page;
    });
  }

  formatKi(value: string): string {
    return value ? value.replace(/\./g, ',') : 'Not available';
  }

  triggerSelection(id: number): void {
    this.selectedCharacter.emit(id);
  }
}
