import { Component, OnInit } from '@angular/core';
import { Obra } from '../../models/obra';
import { ObraService } from '../../services/obra.service';
import { Global} from '../../services/global';
import Swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-obra-editar',
  templateUrl: '../obras-crear/obras-crear.component.html',
  styleUrls: ['./obra-editar.component.css'],
  providers: [ObraService]
})
export class ObraEditarComponent implements OnInit {
  public obra: Obra;
  public status: string;
  public is_edit: boolean;
  public subtitle: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url+'obras/upload-image'     
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Foto',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _obraService: ObraService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = `${Global.url}obras/`
    this.obra = new Obra(null, '', null, '', '', '', null);
    this.is_edit = true;
    this.subtitle = 'para editar modifique los datos que necesite actualizar';
  }

  ngOnInit(): void {
    this.getObras();
  }

  getObras(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      
      this._obraService.getObra(id).subscribe(
        response => {
          if(response){
            this.obra = response;
          }else{
            this._router.navigate(['/obras']);
            this.status = 'error al encontrar la obra';
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/obras']);
          this.status = 'error al encontrar la obra';
        }
      )
    });
  }

  onSubmit(){
    this._obraService.editObra(this.obra._id, this.obra).subscribe(
      response => {
        if(response){
          this.status = 'success';
          
          //mensaje positivo
          Swal.fire({
            icon: 'success',
            title: 'Datos Actualizados Correctamente',
            showConfirmButton: false,
            timer: 1700
          });

          this._router.navigate(['/obras/ver/', this.obra._id]);
          this.obra = response;
        }else{
          this.status = 'error al intentar editar';
        }
      },
      error => {
        console.log(error);
        this.status = 'error al intentar editar';
      }
    )
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.obra.image = image_data.image;
  }

}
