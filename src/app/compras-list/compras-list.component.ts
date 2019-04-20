import {Component, OnInit} from '@angular/core';
import {Ingrediente} from '../compartido/ingrediente.model';
import {ComprasListaService} from './compras-lista.service';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {
  ingredientes: Ingrediente[];

  constructor(private comprasListaServicio: ComprasListaService) {
  }

  ngOnInit() {
    this.ingredientes = this.comprasListaServicio.getIngredientes();
    this.comprasListaServicio.ingredientesCambiados
      .subscribe(
        (ingredientes: Ingrediente[]) => {
          this.ingredientes = ingredientes;
        }
      );
  }

}
