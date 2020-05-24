import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { AutorService } from '../../services/autor.service';
import { Autor } from '../../models/autor';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
  providers: [AutorComponent]
})
export class AutorComponent implements OnInit {

  public autor: Autor;
  public url: string;
  
  constructor(
    public _autorService: AutorService,
    private _route: ActivatedRoute,
    private _router: Router,    
  ) { 
    this.url = Global.url + 'autores/';   
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['id'];

      this._autorService.getAutor(id).subscribe(
        res => {
          if(res){
            this.autor = res;
          }else{            
            this._router.navigate(['/autores']);
          }
        },
        error => {
          this._router.navigate(['/autores']);
          console.log(error);                    
        }        
      )      
    });     
  }

}