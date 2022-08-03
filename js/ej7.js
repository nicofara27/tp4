// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

//agendaLlena

let agendaTelefonica = {
  contactos: {},
  contactosRestantes: 10,

  aniadirContacto(contacto) {
    if (
      this.contactos.hasOwnProperty(contacto) === false &&
      this.contactosRestantes >= 0
    ) {
      let telefono = parseInt(
        prompt(`Ingrese el numero de telefono de ${contacto}`)
      );
      this.contactos[contacto] = telefono;

      this.contactosRestantes -= 1;
    } else if (
      this.contactos.hasOwnProperty(contacto)&&
      this.contactosRestantes >= 0
    ) {
      alert(`El contacto ${contacto} ya esta en la agenda`);
    } else {
      alert("Se ha alcanzado el nro maximo de contactos");
    }
  },

  existeContacto(contacto) {
    if (this.contactos.hasOwnProperty(contacto)) {
      document.write(`<p class="texto">El contacto ${contacto} existe en la agenda</p>`);
    } else {
      document.write(`<p class="texto">El contacto ${contacto} no existe en la agenda</p>`);
    }
  },

  listarContactos() {
    document.write(`
      <h2><b>Contactos</b></h2>
      <ul>`);
    for (let i = 0; i <= 9 - this.contactosRestantes; i++) {
      document.write(
        `<li class="texto">${Object.keys(this.contactos)[i]}: ${
          Object.values(this.contactos)[i]
        }</li>`
      );
    }
    document.write(`</ul>`);
  },

  buscarContacto(contacto) {
    if (this.contactos.hasOwnProperty(contacto)) {
      document.write(
        `<p class="texto">El telefono del contacto ${contacto} es ${this.contactos[contacto]}</p>`
      );
    } else {
      document.write(`<p class="texto">El contacto ${contacto} no existe</p>`);
    }
  },

  eliminarContacto(contacto) {
    if (this.contactos.hasOwnProperty(contacto)) {
      delete this.contactos[contacto];
      this.contactosRestantes++;

      document.write(`<p class="texto">Se ha eliminado correctamente el contacto</p>`);
    } else {
        document.write(`<p class="texto">No se ha podido eliminar el contacto debido a que no existe</p>`);
    }
  },

  huecosLibres() {
    document.write(
      `<p class="texto">Quedan <b>${this.contactosRestantes}</b> espacios para contactos en la agenda<br></p>`
    );
  },

  agendaLlena() {
    if (this.contactosRestantes === 0) {
      document.write(`<p class="texto">La agenda esta llena<br></p>`);
    } else {
      document.write(
        `<p class="texto">La agenda todavia tiene espacio<br></p>`
      );
    }
  },
};

while(confirm("¿Desea realizar una acción?")) {
    let accion = parseInt(prompt(`Presione la tecla correspondiente a la acción que quiera realizar
    1: Agregar un nuevo contacto
    2: Comprobar si existe un contacto
    3: Mostrar el telefono de un contacto en particular
    4: Eliminar un contacto
    5: Mostrar todos los contactos
    6: Indicar cuantos espacios quedan disponibles
    7: Indicar si la agenda esta llena`));

    switch(accion) {
        case 1: {
            let contacto = prompt("Ingrese el nombre del contacto");
            agendaTelefonica.aniadirContacto(contacto);
            break;
        }
        case 2: {
            let contacto = prompt("Ingrese el nombre del contacto que quiere buscar");
            agendaTelefonica.existeContacto(contacto);
            break;
        }
        case 3: {
            let contacto = prompt("Ingrese el nombre del contacto que quiere buscar")
            agendaTelefonica.buscarContacto(contacto);
            break;
        }
        case 4: {
            let contacto = prompt("Ingrese el nombre del contacto que quiere eliminar")
            agendaTelefonica.eliminarContacto(contacto);
            break;
        }
        case 5 : {
            agendaTelefonica.listarContactos();
            break;
        }
        case 6: {
            agendaTelefonica.huecosLibres();
            break;
        }
        case 7: {
            agendaTelefonica.agendaLlena();
            break;
        }

    }
}