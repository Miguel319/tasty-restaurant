import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecetasComponent } from "./recetas/recetas.component";
import { ComprasListComponent } from "./compras-list/compras-list.component";
import { RecetaInicioComponent } from "./recetas/receta-inicio/receta-inicio.component";
import { RecetasDetallesComponent } from "./recetas/recetas-detalles/recetas-detalles.component";
import { RecetaEditarComponent } from "./recetas/receta-editar/receta-editar.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recetas", pathMatch: "full" },
  {
    path: "recetas",
    component: RecetasComponent,
    children: [
      { path: "", component: RecetaInicioComponent },
      { path: "nuevo", component: RecetaEditarComponent },
      { path: ":id", component: RecetasDetallesComponent },
      { path: ":id/editar", component: RecetaEditarComponent }
    ]
  },
  { path: "compras-lista", component: ComprasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
