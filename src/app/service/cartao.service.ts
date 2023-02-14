import { Cartao } from './../model/Cartao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartaoService{

  constructor(
    private http: HttpClient
  ) { }

  getAllCartoes(): Observable<Cartao[]>
  {
    return this.http.get<Cartao[]>('http://localhost:8080/cartoes')
  }

  postCartao(cartao: Cartao): Observable<Cartao>
  {
    return this.http.post<Cartao>('http://localhost:8080/cartoes',cartao)
  }
  }
