import {Component, OnInit} from '@angular/core';
import {Receta} from '../receta.model';
import {RecetaService} from '../receta.service';

@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  recetas: Receta[];

  constructor(private recetaService: RecetaService) {
  }

  ngOnInit() {
    this.recetas = this.recetaService.getReceta();
  }


}