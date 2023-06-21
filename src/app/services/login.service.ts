import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageUtil } from '../utils/storage.util';
import { RegisterAuthorizationInterface, RegisterResponseInterface } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_urlProd = 'https://app.sysfinan.com/api/auth';
  private base_urlHomo = 'https://sys-fin-api.onrender.com/api/auth';
  private base_urlDev = 'http://localhost:8000/api/auth';

  constructor(public http: HttpClient) { }

  public get isLogged(): boolean {
    return StorageUtil.get('isLogged');
  }
  
  login(dados: { cnpj: string; senha: string}): Observable<RegisterAuthorizationInterface> {
      return this.http.post<RegisterAuthorizationInterface>(`${this.base_urlProd}/login`, dados);
  }

  cadastrar(dados: { nome: string; cnpj: string; razaoSocial: string ; email: string; senha: string }): Observable<RegisterResponseInterface> {
      return this.http.post<RegisterResponseInterface>(`${this.base_urlProd}/register`, dados);
  }
}
