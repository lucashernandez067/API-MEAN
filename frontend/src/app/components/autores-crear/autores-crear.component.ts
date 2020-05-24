import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { AutorService } from '../../services/autor.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autores-crear',
  templateUrl: './autores-crear.component.html',
  styleUrls: ['./autores-crear.component.css'],
  providers: [AutorService]
})

export class AutoresCrearComponent implements OnInit {
  
  public autor: Autor;
  public status: string;
  public is_edit: boolean;
  public subtitle: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: `${Global.url}autores/upload-image/`     
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
    private _autorService: AutorService

  ) {
    this.autor = new Autor(null, '', '', '', '', '', null, false, null, null);
    this.is_edit = false;
    this.subtitle = 'Para registrar llene el formulario con la información del autor';
    this.url = Global.url + 'autores/';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._autorService.createAutor(this.autor).subscribe(
      response => {
        if (response) {
          this.status = 'success';
          this.autor = response;
          
          //mensaje positivo
          Swal.fire({
            icon: 'success',
            title: 'Autor Registrado Correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          
          this._router.navigate(['/autores']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.autor.image = image_data.image;
  }

}
