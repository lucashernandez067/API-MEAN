import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  @Input() header: number;
  public titulo: string;
  public ruta: string;
  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.header == 1){
      this.titulo = "autores";
    }
    if(this.header == 2){
      this.titulo = "obras";
    }
  }

}
