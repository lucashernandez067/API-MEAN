import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ObraService } from '../../services/obra.service';
import { Obra } from '../../models/obra';
import { Global } from '../../services/global';
 
@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css'],
  providers: [ObraService]
})
export class ObraComponent implements OnInit {

  public obra: Obra;
  public url: string;

  constructor(
    private _obraService: ObraService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = `${Global.url}obras/`;
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['id'];

      this._obraService.getObra(id).subscribe(
        response =>{
          if(response){
            this.obra = response;
          }else{
            this._router.navigate(['/obras']);
          }
        },
        error =>{
          this._router.navigate(['/obras']);
          console.log(error);
        }
      )
    });
  }

}
