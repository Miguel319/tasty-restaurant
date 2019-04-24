import { Component, OnInit } from "@angular/core";
import { Receta } from "../receta.model";
import { RecetaService } from "../receta.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recetas-lista",
  templateUrl: "./recetas-lista.component.html",
  styleUrls: ["./recetas-lista.component.css"]
})
export class RecetasListaComponent implements OnInit {
  recetas: Receta[];

  constructor(
    private recetaService: RecetaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

  alAgregarReceta() {
    this.router.navigate(["nuevo"], { relativeTo: this.route });
  }
}
