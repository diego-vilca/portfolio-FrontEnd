export class Educacion {
  id ?: number;
  institucion : string;
  titulo : string;
  anioIngreso : string;
  anioEgreso : string;
  urlImg : string;
  urlWeb : string;
  urlCertificado : string;


  constructor(institucion : string, titulo: string, anioIngreso : string, anioEgreso : string,
              urlImg : string, urlWeb : string, urlCertificado : string) {
    this.institucion = institucion;
    this.titulo = titulo;
    this.anioIngreso = anioIngreso;
    this.anioEgreso = anioEgreso;
    this.urlImg = urlImg;
    this.urlWeb = urlWeb;
    this.urlCertificado = urlCertificado;
  }



}
