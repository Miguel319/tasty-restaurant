import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetasDetallesComponent } from './recetas/recetas-detalles/recetas-detalles.component';
import { RecetasArticulosComponent } from './recetas/recetas-lista/recetas-articulos/recetas-articulos.component';
import { ComprasListComponent } from './compras-list/compras-list.component';
import { ComprasEditarComponent } from './compras-list/compras-editar/compras-editar.component';
import {RecetasListaComponent} from './recetas/recetas-lista/recetas-lista.component';
import {FormsModule} from '@angular/forms';
import { ComprasListaService } from './compras-list/compras-lista.service';
import { DropdownDirective } from './compartido/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecetaInicioComponent } from './recetas/receta-inicio/receta-inicio.component';
import { RecetaEditarComponent } from './recetas/receta-editar/receta-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    RecetasListaComponent,
    RecetasDetallesComponent,
    RecetasArticulosComponent,
    ComprasListComponent,
    ComprasEditarComponent,
    DropdownDirective,
    RecetaInicioComponent,
    RecetaEditarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ComprasListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
