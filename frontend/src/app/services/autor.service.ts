import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) { 

    this.url = Global.url;

  }

  getAutores():Observable<any>{
    return this._http.get(this.url+'autores');
  }

  getAutor(autorId):Observable<any>{
    return this._http.get(this.url+'autores/'+autorId);
  }

  search(searchString):Observable<any>{
    return this._http.get(this.url+'autores/search/'+searchString);
  }

  createAutor(autor):Observable<any>{
    let params = JSON.stringify(autor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this._http.post(this.url+'autores/crear', params, {headers: headers});
  }

  editAutor(autorId, autor):Observable<any>{
    let params = JSON.stringify(autor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'autores/'+autorId, params, {headers:headers});
  }

  delete(autorId):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.delete(this.url+'autores/'+autorId,{headers:headers});
  }

}
