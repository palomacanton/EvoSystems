import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiURL = this.baseUrl + "api/departamentos";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDepartamentos(): Observable<IDepartamento[]> {
    return this.http.get<IDepartamento[]>(this.apiURL);
  }
}

