import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Collab } from '../Collabs';


@Injectable({
  providedIn: 'root'
})
export class CollabsService {
  private apiUrl = "http://localhost:8080/api/collabs";
  constructor(private http: HttpClient) { }
  
  getCollabs(): Observable<Collab[]> {
    return this.http.get<Collab[]>(this.apiUrl)
  }

}
