import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = `${environment.url}/product`;
 
  constructor(
    private http: HttpClient
  ) {
  }

  getAllProduit(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.url}/get`, {observe: 'response'});
  }

}
