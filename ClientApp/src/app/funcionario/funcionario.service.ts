import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFuncionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiURL = this.baseUrl + "api/funcionarios";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetFuncionarios(): Observable<IFuncionario[]> {
       return this.http.get<IFuncionario[]>(this.apiURL);
  }
}
