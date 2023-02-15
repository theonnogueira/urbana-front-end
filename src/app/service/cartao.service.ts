import { Cartao } from './../model/Cartao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartaoService {
  constructor(private http: HttpClient) {}

  getAllCartoes(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>('http://localhost:8080/cartoes');
  }

  getByIdCartao(id: number): Observable<Cartao> {
    return this.http.get<Cartao>(`http://localhost:8080/cartoes/${id}`);
  }

  postCartao(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>('http://localhost:8080/cartoes', cartao);
  }

  putCartao(cartao: Cartao): Observable<Cartao> {
    return this.http.put<Cartao>('http://localhost:8080/cartoes', cartao);
  }

  deleteCartao(id: number) {
    this.http.delete(`http://localhost:8080/cartoes/${id}`);
  }
}
