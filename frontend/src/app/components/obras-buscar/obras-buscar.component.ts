import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ObraService } from '../../services/obra.service';
import { Obra } from '../../models/obra';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-obras-buscar',
  templateUrl: './obras-buscar.component.html',
  styleUrls: ['./obras-buscar.component.css'],
  providers: [ObraService]
})
export class ObrasBuscarComponent implements OnInit {

  public obras: Obra[];
  public searchString: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _obrasService: ObraService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.searchString = params['search'];

      this._obrasService.search(this.searchString).subscribe(
        response => {
          if(response){
            this.obras = response;
          }
        },
        error => {
          console.log(error);
          this.obras = [];    
        }
      )
    })
  }

}
