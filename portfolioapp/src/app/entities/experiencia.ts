export class Experiencia {
  idExperiencia ?: number;
  empresa : string;
  funcion : string;
  anioIngreso : string;
  anioEgreso : string;
  urlEmpresa : string;


  constructor(empresa : string, funcion : string, anioIngreso : string,
              anioEgreso : string, urlEmpresa : string) {
    this.empresa = empresa;
    this.funcion = funcion;
    this.anioIngreso = anioIngreso;
    this.anioEgreso = anioEgreso;
    this.urlEmpresa = urlEmpresa;
  }
}
