import {Component, OnInit, Input} from '@angular/core';
import {Receta} from '../../receta.model';
import {RecetaService} from '../../receta.service';

@Component({
  selector: 'app-recetas-articulos',
  templateUrl: './recetas-articulos.component.html',
  styleUrls: ['./recetas-articulos.component.css']
})
export class RecetasArticulosComponent implements OnInit {
  @Input() receta: Receta;

  constructor(private recetaServicio: RecetaService) {
  }

  ngOnInit() {
  }

  alSeleccionar() {
    this.recetaServicio.recetaSeleccionada.emit(this.receta);
  }
}
