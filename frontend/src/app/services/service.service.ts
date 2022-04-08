import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Service } from '../Service';
import { Tache } from '../Taches';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
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
   addService(service: Service): Observable<Service>{
    return this.http.post<Service>(this.apiUrl,service)
   }

   addServiceTache(service: Service,tache: Tache): Observable<Service>{
    return this.http.post<Service>(this.apiUrl,service)
   }
   updateService(id : number, service: Service): Observable<Service>{
    return this.http.put(`${this.apiUrl}/${id}`, service,httpOptions);
    
  }
   
   deleteService(id : number): Observable<Service>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}



