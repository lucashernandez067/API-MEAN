import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() desde: number;
  public ruta: string;
  public searchString: String;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
   
  }

  ngOnInit(): void {
    if(this.desde == 1){
      this.ruta = "autores";      
    }
    if(this.desde == 2){
      this.ruta = "obras";
    }    
  }

  goSearch(){
    this._router.navigate([`${this.ruta}/buscar/`, this.searchString])  
  }

}
