import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiEndpoint = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  retrieveCharacters(page: number = 1, items: number = 10): Observable<{ items: ICharacter[], meta: any, links: any }> {
    const url = `${this.apiEndpoint}?page=${page}&limit=${items}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<{ items: ICharacter[], meta: any, links: any }>(url, { headers }).pipe(
      map(response => response)
    );
  }
}
