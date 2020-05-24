import { Component, OnInit } from '@angular/core';
import { Obra } from '../../models/obra';
import { ObraService } from '../../services/obra.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obras-crear',
  templateUrl: './obras-crear.component.html',
  styleUrls: ['./obras-crear.component.css'],
  providers: [ObraService]
})
export class ObrasCrearComponent implements OnInit {

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
    private _router: Router,
    private _route: ActivatedRoute,
    private _obraService: ObraService
  ) { 
    this.obra = new Obra(null, '', null, '', '', '', null);
    this.is_edit = false;
    this.subtitle = 'Para registrar llene el formulario con la información de la obra';
    this.url = Global.url + 'obras/';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._obraService.createObra(this.obra).subscribe(
      response => {
        if(response){
          this.status = 'success';
          this.obra = response;

          //mensaje positivo
          Swal.fire({
            icon: 'success',
            title: 'Obra Registrada Correctamente',
            showConfirmButton: false,
            timer: 1500
          });

          this._router.navigate(['/obras']);

        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
    
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.obra.image = image_data.image;
  }

}
