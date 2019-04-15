export class Receta {
  public nombre: string;
  public descripcion: string;
  public rutaImagen: string;

  constructor(nombre: string, descripcion: string, rutaImagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.rutaImagen = rutaImagen;
  }
}
