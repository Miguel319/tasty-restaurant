import { Component, OnInit } from "@angular/core";
import { Receta } from "../receta.model";
import { RecetaService } from "../receta.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recetas-detalles",
  templateUrl: "./recetas-detalles.component.html",
  styleUrls: ["./recetas-detalles.component.css"]
})
export class RecetasDetallesComponent implements OnInit {
  receta: Receta;
  id: number;

  constructor(
    private recetaServicio: RecetaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.receta = this.recetaServicio.getReceta(this.id);
    });
  }

  alAgregarCompra() {
    this.recetaServicio.agregarIngredientes(this.receta.ingredientes);
  }

  alEditarReceta() {
    this.router.navigate(["editar"], { relativeTo: this.route });
    // this.router.navigate(["../", this.id, "editar"], {
    //   relativeTo: this.route
    // });
  }
}
