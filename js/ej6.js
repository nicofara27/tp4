// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(isbn, titulo, autor, nroPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nroPaginas = nroPaginas;
    }

    mostrarLibro() {
        document.write(`<p class="texto">El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPaginas} paginas<br></p>`);
    }

    set modificarIsbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }
    set modificarTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }
    set modificarAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }
    set modificarnNoPaginas(nuevoNroPaginas) {
        this.nroPaginas = nuevoNroPaginas;
    }

    get mostrarIsbn() {
        return this.isbn;
    }
    get mostrarTitulo() {
        return this.titulo;
    }
    get mostrarAutor() {
        return this.autor;
    }
    get mostrarNroPaginas() {
        return this.nroPaginas;
    }
}
let masPaginas = () => {
    if(witcher.mostrarNroPaginas > darkTower.mostrarNroPaginas) {
        document.write(`<p class="texto">El libro ${witcher.mostrarTitulo} tiene ${witcher.mostrarNroPaginas-darkTower.mostrarNroPaginas} paginas mas que ${darkTower.mostrarTitulo}</p>`);
    } else {
        document.write(`<p class="texto">El libro ${darkTower.mostrarTitulo} tiene ${darkTower.mostrarNroPaginas-witcher.mostrarNroPaginas} paginas mas que ${witcher.mostrarTitulo}</p>`);
    }
}

let witcher = new Libro(9780316029193, "The Witcher: Blood of elves", "Andrzej Sapkowski", 320);
let darkTower = new Libro(9786073128520, "La Torre Oscura I: El Pistolero", "Stephen King", 304);


witcher.mostrarLibro();
darkTower.mostrarLibro();

masPaginas();