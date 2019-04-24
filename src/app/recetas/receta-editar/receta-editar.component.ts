import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-receta-editar',
  templateUrl: './receta-editar.component.html',
  styleUrls: ['./receta-editar.component.css']
})
export class RecetaEditarComponent implements OnInit {
  id: number;
  modoEditar = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.modoEditar = params['id'] != null;
          console.log(this.modoEditar);
        }
      );
  }
}
