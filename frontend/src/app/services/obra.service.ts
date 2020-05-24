import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obra } from '../models/obra';
import { Global } from './global';
 
@Injectable({
  providedIn: 'root'
})
export class ObraService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  //funcion get
  getObras():Observable<any>{
    return this._http.get(`${this.url}obras`);
  }

  //funcion get one
  getObra(ObraId):Observable<any>{
    return this._http.get(`${this.url}obras/${ObraId}`)
  }

  //funcion post
  createObra(obra):Observable<any>{
    let params = JSON.stringify(obra);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this._http.post(`${this.url}obras/crear`, params, {headers: headers});
  }

  //funcion put
  editObra(obraId, obra):Observable<any>{
    let params = JSON.stringify(obra);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(`${this.url}obras/${obraId}`, params, {headers: headers});
  }

  //funcion delete
  deleteObra(obraId):Observable<any>{
    return this._http.delete(`${this.url}obras/${obraId}`);
  }

  //funcion de busqueda
  search(searchString):Observable<any>{
    return this._http.get(`${this.url}obras/search/${searchString}`);
  }
}
