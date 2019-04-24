import { Ingrediente } from '../compartido/ingrediente.model';
import { EventEmitter } from '@angular/core';

export class ComprasListaService {
    ingredientesCambiados = new EventEmitter<Ingrediente[]>();
    private ingredientes: Ingrediente[] = [
        new Ingrediente('Queso', 8),
        new Ingrediente('Cilantro', 2)
    ];

    getIngredientes (): Ingrediente[] {
        return this.ingredientes.slice();
    }

    agregarIngrediente (ingrediente: Ingrediente) {
        this.ingredientes.push(ingrediente);
        this.ingredientesCambiados.emit(this.ingredientes.slice());
    }

    agregarIngredientes (ingredientes: Ingrediente[]) {
        this.ingredientes.push(...ingredientes);
        this.ingredientesCambiados.emit(this.ingredientes.slice());
    }
}