import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../models/character';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  data: ICharacter[] = [];
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
    });
  }

  formatKi(value: string | undefined): string {
    return value ? value.replace(/\./g, ',') : 'Not available';
  }

  showCharacterDetails(char: ICharacter): void {
    this.selectedCharacter.emit(char.id);

    // Llama a SweetAlert con los detalles del personaje
    Swal.fire({
      title: char.name,
      html: document.getElementById(`character-details-${char.id}`)?.innerHTML || '',
      confirmButtonText: 'Close'
    });
  }
}
