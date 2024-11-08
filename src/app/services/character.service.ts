import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1, limit: number = 10): Observable<{ items: ICharacter[], meta: any, links: any }> {
    const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<{ items: ICharacter[], meta: any, links: any }>(url, { headers });
  }
  
  getFilteredCharacters(page: number = 1, limit: number = 10, filters: any): Observable<{ items: ICharacter[], meta: any, links: any }> {
    let query = `?page=${page}&limit=${limit}`;
    for (const key in filters) {
      if (filters[key]) {
        query += `&${key}=${filters[key]}`;
      }
    }
    const url = `${this.baseUrl}${query}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<{ items: ICharacter[], meta: any, links: any }>(url, { headers });
  }
}
