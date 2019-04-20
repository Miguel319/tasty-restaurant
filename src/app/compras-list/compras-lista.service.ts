import {Ingrediente} from '../compartido/ingrediente.model';
import {EventEmitter} from '@angular/core';

export class ComprasListaService {
  ingredientesCambiados = new EventEmitter<Ingrediente[]>();
  private ingredientes: Ingrediente[] = [
    new Ingrediente('Manzana', 5),
    new Ingrediente('Pepino', 8),
    new Ingrediente('Mandarina', 7)
  ];

  getIngredientes() {
    return this.ingredientes.slice();
  }

  agregarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredientesCambiados.emit(this.ingredientes.slice());
  }

  agregarIngredientes(ingredientes: Ingrediente[]) {
    // for (const ingrediente of ingredientes) {
    //   this.agregarIngrediente(ingrediente);
    // }
    this.ingredientes.push(...ingredientes);
    this.ingredientesCambiados.emit(this.ingredientes.slice());
  }
}
