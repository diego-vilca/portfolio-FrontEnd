export class Persona {
  id ?: number;
  nombre : string;
  apellido : string;
  urlBannerImg : string;
  urlPerfilImg : string;
  acercaDe : string;

  constructor(nombre : string, apellido : string, urlBannerImg : string,
              urlPerfilImg : string, acercaDe : string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.urlBannerImg = urlBannerImg;
      this.urlPerfilImg = urlPerfilImg;
      this.acercaDe = acercaDe;

  }

}
