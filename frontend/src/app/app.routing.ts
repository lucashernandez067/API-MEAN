//importar los modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes que requieren una página en concreto
import { InicioComponent } from './components/inicio/inicio.component';
import { AutoresComponent } from './components/autores/autores.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ErrorComponent } from './components/error/error.component';
import { AutoresCrearComponent } from './components/autores-crear/autores-crear.component';
import { AutorComponent } from './components/autor/autor.component';
import { AutoresBuscarComponent } from './components/autores-buscar/autores-buscar.component';
import { AutorEditarComponent } from './components/autor-editar/autor-editar.component';
import { ObrasCrearComponent } from './components/obras-crear/obras-crear.component';
import { ObrasBuscarComponent } from './components/obras-buscar/obras-buscar.component';
import { ObraComponent } from './components/obra/obra.component';
import { ObraEditarComponent } from './components/obra-editar/obra-editar.component';


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'autores', component: AutoresComponent},    
    {path: 'autores/crear', component: AutoresCrearComponent},    
    {path: 'autores/buscar/:search', component: AutoresBuscarComponent},
    {path: 'autores/ver/:id', component: AutorComponent},
    {path: 'autores/editar/:id', component: AutorEditarComponent},
    {path: 'obras', component: ObrasComponent},
    {path: 'obras/crear', component: ObrasCrearComponent},
    {path: 'obras/buscar/:search', component: ObrasBuscarComponent},
    {path: 'obras/ver/:id', component: ObraComponent},
    {path: 'obras/editar/:id', component: ObraEditarComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);