import { Receta } from "./receta.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente } from '../compartido/ingrediente.model';
import { ComprasListaService } from '../compras-list/compras-lista.service';

@Injectable()
export class RecetaService {
  recetaSeleccionada = new EventEmitter<Receta>();

  private recetas: Receta[] = [
    new Receta(
      "Espagueti",
      "Receta de espagueti",
      "https://www.cocinavital.mx/wp-content/uploads/2017/10/espagueti-rojo-1.jpg",
      [
        new Ingrediente('Queso', 3),
        new Ingrediente('Cilantro', 4)
      ]
    )
  ];

  constructor(private comprasListaServicio: ComprasListaService) {}

  getRecetas() {
    return this.recetas.slice();
  }

  getReceta(id: number) {
    return this.recetas[id];
  }

  agregarIngredientes(ingredientes: Ingrediente[]) {
    this.comprasListaServicio.agregarIngredientes(ingredientes);
  }

  
}
