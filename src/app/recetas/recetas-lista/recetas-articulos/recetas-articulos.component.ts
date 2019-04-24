import { Component, OnInit, Input } from "@angular/core";
import { Receta } from "../../receta.model";

@Component({
  selector: "app-recetas-articulos",
  templateUrl: "./recetas-articulos.component.html",
  styleUrls: ["./recetas-articulos.component.css"]
})
export class RecetasArticulosComponent implements OnInit {
  @Input() receta: Receta;
  @Input() index: number;

  ngOnInit() {}
}
