import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abs } from '../Absence';

@Injectable({
  providedIn: 'root'
})
export class AbsService {

  private apiUrl = "http://localhost:8080/api/abs";
  constructor(private http: HttpClient) { }
  
  getAbs(): Observable<Abs[]> {
    return this.http.get<Abs[]>(this.apiUrl)
  }

}
