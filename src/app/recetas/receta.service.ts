import {Receta} from './receta.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingrediente} from '../compartido/ingrediente.model';
import {ComprasListaService} from '../compras-list/compras-lista.service';

@Injectable()
export class RecetaService {
  recetaSeleccionada = new EventEmitter<Receta>();
  private recetas: Receta[] = [
    new Receta('Papas fritas',
      'Las reales papas fritas',
      'https://s3-sa-east-1.amazonaws.com/assets.abc.com.py/2015/10/06/_572_369_1288208.jpg',
      [
        new Ingrediente('Papa', 4),
        new Ingrediente('Aceite', 1),
        new Ingrediente('Sal', 8),
        new Ingrediente('Pimienta', 4)
      ])
  ];

  constructor(private comprasListaServicio: ComprasListaService) {
  }

  getReceta() {
    return this.recetas.slice();
  }

  agregarIngredientes(ingredientes: Ingrediente[]) {
    this.comprasListaServicio.agregarIngredientes(ingredientes);
  }
}
