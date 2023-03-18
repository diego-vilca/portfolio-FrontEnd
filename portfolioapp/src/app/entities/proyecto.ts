export class Proyecto {
  idProyecto ?: number;
  nombre : string;
  descripcion : string;
  urlImg : string;
  urlVideo : string;
  urlRepositorio : string;


  constructor(nombre : string, descripcion : string, urlImg :
              string, urlVideo : string, urlRepositorio : string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.urlImg = urlImg;
    this.urlVideo = urlVideo;
    this.urlRepositorio = urlRepositorio;
  }
}
