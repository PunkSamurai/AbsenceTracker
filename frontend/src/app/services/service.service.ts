import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Service } from '../Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = "http://localhost:8080/api/services";
  constructor(private http: HttpClient) { }
  
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl)
  }
  getServiceById(id : number): Observable<Service>{
    return this.http.get<Service>(`${this.apiUrl}/${id}`);
   }
}



