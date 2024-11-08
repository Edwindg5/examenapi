import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = 'https://web.dragonball-api.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
