import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { Autor } from 'src/app/models/autor';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  providers: [AutorService]
})
export class AutoresComponent implements OnInit {

  public autores: Autor[];
  public url: string;
  public error: boolean;

  constructor(
    private _autorService: AutorService
  ) { 
    this.url = Global.url+'autores/';
    this.error = false;  
  }

  ngOnInit(): void {   
    this._autorService.getAutores().subscribe(
      res =>{    
        if(res){          
          this.autores = res;          
        }else{
          console.log('algo anda terriblemente mal...');
        }
      },
      error => {
        console.log(error); 
        this.error = true;       
      }
      
    );
  }

}
