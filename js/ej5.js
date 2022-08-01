// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  mostrarGeneracion() {
    if (this.anioNacimiento <= 1948) {
      document.write(
        `<p class="texto">Usted pertenece a la generación <b>Silent generation (Los niños de la posguerra)</b> y su rasgo caracteristico es la <b>austeridad</b></p>`
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      document.write(
        `<p class="texto">Usted pertenece a la generación <b>Baby Boom</b> y su rasgo caracteristico es la <b>ambición</b></p>`
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      document.write(
        `<p class="texto">Usted pertenece a la  <b>Generación X</b> y su rasgo caracteristico es la <b>obseción por el éxito</b></p>`
      );
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      document.write(
        `<p class="texto">Usted pertenece a la  <b>Generación Y (Millennials)</b> y su rasgo caracteristico es la <b>frustación</b></p>`
      );
    } else {
      document.write(
        `<p class="texto">Usted pertenece a la  <b>Generación Z</b> y su rasgo caracteristico es la <b>irreverencia</b></p>`
      );
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`<p class="texto">Usted es mayor de edad</p>`);
    } else {
      document.write(`<p class="texto">Usted es menor de edad</p>`);
    }
  }
  mostrarDatos() {
    document.write(`
        <ul class="texto">
        <li>Nombre:${this.nombre}</li>
        <li>Año de nacimiento:${this.anioNacimiento}</li>
        <li>Edad:${this.edad}</li>
        <li>DNI:${this.dni}</li>
        <li>Sexo:${this.sexo}</li>
        <li>Peso:${this.peso}</li>
        <li>Altura:${this.altura}</li>
        </ul>
        `);
  }
  generaDNI() {
    let nroDni = Math.floor(10000000 + Math.random() * 90000000);
    document.write(`<p class="texto">Nro DNI aleatorio: <b>${nroDni}</b></p>`);
  }
}

let persona1 = new Persona("Nicolas", 27, 38489829, "M", 80, 173, 1940);

persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generaDNI();
