import {Component, OnInit, Input} from '@angular/core';
import {Receta} from '../receta.model';
import {RecetaService} from '../receta.service';

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.component.html',
  styleUrls: ['./recetas-detalles.component.css']
})
export class RecetasDetallesComponent implements OnInit {
  @Input() receta: Receta;

  constructor(private recetaServicio: RecetaService) {
  }

  ngOnInit() {
  }

  alAgregarCompra() {
    this.recetaServicio.agregarIngredientes(this.receta.ingredientes);
  }

}
