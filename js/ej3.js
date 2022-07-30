// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(medidaAlto, medidaAncho) {
    (this.alto = medidaAlto), (this.ancho = medidaAncho);
  }
  perimetro() {
    return (this.alto + this.ancho) * 2;
  }
  area() {
    return this.alto * this.ancho;
  }
  nuevoAlto(nroNuevo) {
    this.alto = nroNuevo;
  }
  nuevoAncho(nroNuevo) {
    this.ancho = nroNuevo;
  }
  propiedades() {
    document.write(`
        <ul>
            <li>Alto: ${this.alto}</li>
            <li>Ancho: ${this.ancho}</li>
            <li>Perimetro: ${this.perimetro()}</li>
            <li>Área: ${this.area()} </li>
        </ul>`);
  }
}

let alto = parseFloat(
  prompt(`Ingrese la medida del lado vertical del rectangulo`)
);
let ancho = parseFloat(
  prompt(`Ingrese la medida del lado horizontal del rectangulo`)
);

let rectangulo1 = new Rectangulo(alto, ancho);

rectangulo1.propiedades();

rectangulo1.nuevoAlto(10);
rectangulo1.nuevoAncho(30);

rectangulo1.propiedades();
