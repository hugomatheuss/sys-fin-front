import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Conta } from '../model/conta';
import { ContasMock } from '../static/conta-mock';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
    providedIn: 'root'
})
export class ContaService {
    private base_urlProd = 'https://sys-fin-api.onrender.com/api/auth';
    private base_urlDev = 'http://localhost:8000/api/auth';
    private options: any;

    constructor(public http: HttpClient) {
        const token = `${StorageUtil.get('token_type')} ${StorageUtil.get('token')}`
        this.options = {
            headers: new HttpHeaders().set('Authorization', token)
        }
    }

    getConta(id: number): Observable<any> {
        return this.http.get<{ data: Conta}>(`${this.base_urlProd}/contas/${id}`, this.options);
    }

    getContas(): Observable<any> {
        return this.http.get<{data: Array<Conta>}>(`${this.base_urlProd}/contas`, this.options);
    }

    salvarConta(conta: Conta): Observable<any> {
        return this.http.post<boolean>(`${this.base_urlProd}/contas`, conta, this.options);
    }

    editarConta(conta: Conta): Observable<any> {
        return this.http.put<boolean>(`${this.base_urlProd}/contas/${conta.id}`, conta, this.options);
    }

    excluirConta(id: number) {
        return this.http.delete<boolean>(`${this.base_urlProd}/contas/${id}`, this.options);
    }

    filtrarContas(campos: Array<string>): Observable<any> {
        return this.http.post<boolean>(`${this.base_urlProd}/contas/buscar`, campos, this.options);
    }

}