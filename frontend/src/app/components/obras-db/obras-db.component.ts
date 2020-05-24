import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ObraService } from '../../services/obra.service';
import { Obra } from '../../models/obra';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obras-db',
  templateUrl: './obras-db.component.html',
  styleUrls: ['./obras-db.component.css'],
  providers: [ObraService]
})
export class ObrasDbComponent implements OnInit {

  @Input() obras: Obra[];
  public url: string;

  constructor(
    private _obraService: ObraService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = `${Global.url}obras/`;
  }

  ngOnInit(): void {

  }

  delete(obraId){
    Swal.fire({
      title: '¿Eliminar obra?',
      text: 'La obra se eliminará de forma permanente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d50000',
      cancelButtonColor: '#b3e5fc',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    })
    .then((result) => {
      if(result.value) {
        Swal.fire('Eliminado', 'se ha eliminado al obra.', 'success');
        this._obraService.deleteObra(obraId).subscribe(
          response => {
            this._router.navigateByUrl('/RefreshComponent', { skipLocationChange:true }).then(() => {
              this._router.navigate(['/obras']);
            });
          },
          error => {
            console.log(error);
            this._router.navigateByUrl('/RefreshComponent', { skipLocationChange:true }).then(() => {
              this._router.navigate(['/obras']);
            });
          }
        );
      }
    });
  }


}
