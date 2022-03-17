class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  };

  getFullName() {
    return console.log(`${this.nombre} ${this.apellido}`);
  };

  addMascota(mascota) {
    this.mascotas.push(mascota);
  };

  countMascotas() {
    return console.log(this.mascotas.length) 
  };

  addBook(nombre, autor) {
    this.libros.push({nombre: nombre, autor: autor});
  };

  getBookNames() {
    let titulos = [];
    this.libros.map((libro) => {
      titulos.push(libro.nombre);
    });
    return console.log(titulos);
  };
};

const joaquin = new Usuario('Joaquin', 'Bru');


joaquin.addMascota('Congo');

joaquin.addMascota('Molly');

joaquin.addMascota('Roque');

joaquin.addBook('La metamorfosis', 'Kafka');

joaquin.addBook('Lord of the Rings', 'Tolkien');

joaquin.getFullName();

joaquin.countMascotas();

joaquin.getBookNames();