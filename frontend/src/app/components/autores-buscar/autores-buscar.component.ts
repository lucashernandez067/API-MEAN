import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Autor } from '../../models/autor';
import { AutorService } from 'src/app/services/autor.service';


@Component({
  selector: 'app-autores-buscar',
  templateUrl: './autores-buscar.component.html',
  styleUrls: ['./autores-buscar.component.css'],
  providers: [AutorService]
})
export class AutoresBuscarComponent implements OnInit {
  
  public autores: Autor[];
  public searchString: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _autorService: AutorService
  ) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.searchString = params['search'];

      this._autorService.search(this.searchString).subscribe(
        res => {
          if(res){
            this.autores = res;        
          }                 
        },
        error => {
          console.log(error);  
          this.autores = [];         
        }
      )
    });
  }

}
