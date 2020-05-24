import { Component, OnInit } from '@angular/core';
import { ObraService } from '../../services/obra.service';
import { Obra } from '../../models/obra';
import { Global } from '../../services/global';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css'],
  providers: [ObraService]
})
export class ObrasComponent implements OnInit {

  public obras: Obra[];
  public url: string;
  public error: boolean;

  constructor(
    private _obraService: ObraService
  ) { 
    this.url = `${Global.url}obras/`;
    this.error = false;
  }

  ngOnInit(): void {
    //servicio GET
    this._obraService.getObras().subscribe(
      response =>{
        if(response){
          this.obras = response;
        }else{
          console.log('error no se obtuvo respuesta');
        }
      },
      error => {
        console.log(error);
        this.error = true;
      }
    );
  }

}
