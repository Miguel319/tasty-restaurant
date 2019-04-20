import {Component, OnInit} from '@angular/core';
import {Receta} from './receta.model';
import {RecetaService} from './receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetaService]
})
export class RecetasComponent implements OnInit {
  recetaSeleccionada: Receta;

  constructor(private recetaServicio: RecetaService) {
  }

  ngOnInit() {
    this.recetaServicio.recetaSeleccionada.subscribe(
      (receta: Receta) => {
        this.recetaSeleccionada = receta;
      }
    );
  }

}
