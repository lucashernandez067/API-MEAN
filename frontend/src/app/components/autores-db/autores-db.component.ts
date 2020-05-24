import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { AutorService } from '../../services/autor.service';
import { Autor } from 'src/app/models/autor';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-autores-db',
  templateUrl: './autores-db.component.html',
  styleUrls: ['./autores-db.component.css'],
  providers: [AutorService]
})
export class AutoresDbComponent implements OnInit {

  @Input() autores: Autor[];
  public url: string;

  constructor(
    private _autorService: AutorService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.url = Global.url+'autores/';
  }

  ngOnInit(): void {
    
  }

  delete(autorId){
    Swal.fire({
      title: '¿Eliminar autor?',
      text: 'El autor se eliminará de forma permanente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d50000',
      cancelButtonColor: '#b3e5fc',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    })
    .then((result) => {
      if(result.value) {
        Swal.fire('Eliminado', 'se ha eliminado al autor.', 'success');
        this._autorService.delete(autorId).subscribe(
          response => {
            this._router.navigateByUrl('/RefreshComponent', { skipLocationChange:true }).then(() => {
              this._router.navigate(['/autores']);
            });
          },
          error => {
            console.log(error);
            this._router.navigateByUrl('/RefreshComponent', { skipLocationChange:true }).then(() => {
              this._router.navigate(['/autores']);
            });
          }
        );
      }
    });
  }

}
