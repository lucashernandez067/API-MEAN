import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { AutorService } from '../../services/autor.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor-editar',
  templateUrl: '../autores-crear/autores-crear.component.html',
  styleUrls: ['./autor-editar.component.css'],
  providers: [AutorService]
})
export class AutorEditarComponent implements OnInit {

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
      url: Global.url+'autores/upload-image'     
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
    this.is_edit = true;
    this.subtitle = 'Para editar modifique los datos que necesite actualizar';
    this.url = Global.url + 'autores/';
  }

  ngOnInit(): void {
    this.getAutores(); 
  }

  getAutores(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._autorService.getAutor(id).subscribe(
        res => {
          if(res){
            this.autor = res;
          }else{            
            this._router.navigate(['/autores']);
          }
        },
        error => {
          this._router.navigate(['/autores']);
          console.log(error);                    
        }        
      )      
    });  
  }

  onSubmit() {
    this._autorService.editAutor(this.autor._id, this.autor).subscribe(
      response => {
        if (response) {
          this.status = 'success';

          //mensaje positivo
          Swal.fire({
            icon: 'success',
            title: 'Datos Actualizados Correctamente',
            showConfirmButton: false,
            timer: 1700
          });

          this._router.navigate(['/autores/ver/', this.autor._id]);          
          this.autor = response;          
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
