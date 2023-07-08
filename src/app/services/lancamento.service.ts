import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lancamento } from '../model/lancamento';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
    providedIn: 'root'
})
export class LancamentoService {
    private base_urlProd = 'https://app.sysfinan.com/api/auth';
    private base_urlHomo = 'https://sys-fin-api.onrender.com/api/auth';
    private base_urlDev = 'http://localhost:8000/api/auth';
    private options: any;

    constructor(public http: HttpClient) {
        const token = `${StorageUtil.get('token_type')} ${StorageUtil.get('token')}`
        this.options = {
            headers: new HttpHeaders().set('Authorization', token)
        }
    }

    getLancamento(id: number): Observable<any> {
        return this.http.get<{ data: Lancamento}>(`${this.base_urlProd}/lancamentos/${id}`, this.options);
    }

    getLancamentos(): Observable<any> {
        return this.http.get<{data: Array<Lancamento>}>(`${this.base_urlProd}/lancamentos`, this.options);
    }

    salvarLancamento(lancamento: Lancamento): Observable<any> {
        return this.http.post<boolean>(`${this.base_urlProd}/lancamentos`, lancamento, this.options);
    }

    editarLancamento(lancamento: Lancamento): Observable<any> {
        return this.http.put<boolean>(`${this.base_urlProd}/lancamentos/${lancamento.id}`, lancamento, this.options);
    }

    excluirLancamento(id: number) {
        return this.http.delete<boolean>(`${this.base_urlProd}/lancamentos/${id}`, this.options);
    }
}