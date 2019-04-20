import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingrediente} from '../../compartido/ingrediente.model';
import {ComprasListaService} from '../compras-lista.service';

@Component({
  selector: 'app-compras-editar',
  templateUrl: './compras-editar.component.html',
  styleUrls: ['./compras-editar.component.css']
})
export class ComprasEditarComponent implements OnInit {
  @ViewChild('entradaNombre') nombreInputRef: ElementRef;
  @ViewChild('entradaCantidad') cantidadInputRef: ElementRef;

  constructor(private comprasListaServicio: ComprasListaService) {
  }

  ngOnInit() {
  }

  alAgregarArticulo() {
    const ingNombre = this.nombreInputRef.nativeElement.value;
    const ingCantidad = this.cantidadInputRef.nativeElement.value;
    const nuevoIngrediente = new Ingrediente(ingNombre, ingCantidad);
    this.comprasListaServicio.agregarIngrediente(nuevoIngrediente);
  }
}
