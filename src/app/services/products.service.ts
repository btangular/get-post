import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
      private http: HttpClient
  ) { }

  getAllProducts(): Observable<any> {
      return this.http.get(`http://5ce769d59f2c390014db9e5e.mockapi.io/api/v1/products`).pipe(map(res => {
          return res;
      }));
  }

  postProduct(data): Observable<any> {
    return this.http.post(`http://5ce769d59f2c390014db9e5e.mockapi.io/api/v1/products`, data).pipe(map(res => {
      return res;
    }));
  }

  getIdProduct(id): Observable<any> {
    return this.http.get(`http://5ce769d59f2c390014db9e5e.mockapi.io/api/v1/products/${id}`).pipe(map(res => {
      return res;
  }));
  }

  putIdProduct(id, data): Observable<any>{
    return this.http.put(`http://5ce769d59f2c390014db9e5e.mockapi.io/api/v1/products/${id}`, data).pipe(map(res =>{
      return res;
    }));
  }

  deleteIdProduct(id): Observable<any>{
    return this.http.delete(`http://5ce769d59f2c390014db9e5e.mockapi.io/api/v1/products/${id}`).pipe(map(res => {
      return res;
    }))
  }
}