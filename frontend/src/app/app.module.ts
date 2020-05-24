import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { AutoresComponent } from './components/autores/autores.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ErrorComponent } from './components/error/error.component';
import { AutoresCrearComponent } from './components/autores-crear/autores-crear.component';
import { EdadPipe } from './pipes/edad.pipe';
import { TiempoVivido } from './pipes/tiempovividos.pipe';
import { CargaComponent } from './components/carga/carga.component';
import { AutorComponent } from './components/autor/autor.component';
import { AutoresBuscarComponent } from './components/autores-buscar/autores-buscar.component';
import { AutoresDbComponent } from './components/autores-db/autores-db.component';
import { SearchComponent } from './components/search/search.component';
import { AutorEditarComponent } from './components/autor-editar/autor-editar.component';
import { ObrasBuscarComponent } from './components/obras-buscar/obras-buscar.component';
import { ObrasCrearComponent } from './components/obras-crear/obras-crear.component';
import { ObrasDbComponent } from './components/obras-db/obras-db.component';
import { ObraComponent } from './components/obra/obra.component';
import { ObraEditarComponent } from './components/obra-editar/obra-editar.component';
import { YearPipe } from './pipes/year.pipe';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ObrasComponent,
    ErrorComponent,
    AutoresCrearComponent,
    EdadPipe,
    TiempoVivido,
    CargaComponent,
    AutorComponent,
    AutoresBuscarComponent,
    AutoresDbComponent,
    SearchComponent,
    AutorEditarComponent,
    ObrasBuscarComponent,
    ObrasCrearComponent,
    ObrasDbComponent,
    ObraComponent,
    ObraEditarComponent,
    YearPipe,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
