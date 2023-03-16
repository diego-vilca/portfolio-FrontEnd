export class Social {
  id ?: number;
  iconoFA : string;
  color : string;
  urlRed : string;


  constructor(iconoFA : string, color : string, urlRed : string) {
    this.iconoFA = iconoFA;
    this.color = color;
    this.urlRed = urlRed;
  }
}
