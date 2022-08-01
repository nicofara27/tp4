// //  4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// // Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// // Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(nombre, codigo, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
  }
  imprimirDatos() {
    document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Codigo: ${this.codigo}</li>
            <li>Precio: ${this.precio}</li>
        </ul>`);
  }
}

let detergente = new Producto("Detergente", 253, 200);
let cafe = new Producto("Cafe", 592, 280);
let galletas = new Producto("Galletas", 126, 130);

let productos = [detergente, cafe, galletas];

for (let i = 0; i < 3; i++) {
  productos[i].imprimirDatos();
}
