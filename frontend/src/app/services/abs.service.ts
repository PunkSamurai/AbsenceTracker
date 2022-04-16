import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abs } from '../Absence';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AbsService {

  private apiUrl = "http://localhost:8080/api/abs";
  constructor(private http: HttpClient) { }

  getAbs(): Observable<Abs[]> {
    return this.http.get<Abs[]>(this.apiUrl)
  }
  getAbsById(id : number): Observable<Abs>{
    return this.http.get<Abs>(`${this.apiUrl}/${id}`);
   }
   addAbs(abs: Abs,idc:string,idt:number): Observable<Abs>{
    return this.http.post<Abs>(`${this.apiUrl}/${idc}/${idt}`,abs,httpOptions)
   }
   updateAbs(id : number, abs: Abs): Observable<Abs>{
    return this.http.put(`${this.apiUrl}/${id}`, abs);
  }
  deleteAbs(id : number): Observable<Abs>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }



}
