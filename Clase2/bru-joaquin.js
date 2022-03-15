class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  };

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  };

  addMascota(mascota) {
    this.mascotas.push(mascota);
  };

  countMascotas() {
    return this.mascotas.length;
  };

  addBook(nombre, autor) {
    this.libros.push({nombre: nombre, autor: autor});
  };

  getBookNames() {
    let titulos = [];
    this.libros.map((libro) => {
      titulos.push(libro.nombre);
    });
    return titulos;
  };
};

const joaquin = new Usuario('Joaquin', 'Bru');


joaquin.addMascota('Congo');

joaquin.addMascota('Molly');

joaquin.addMascota('Roque');

joaquin.addBook('La metamorfosis', 'Kafka');

joaquin.addBook('LotR', 'Tolkien');

console.log(joaquin.getFullName());

console.log(joaquin.countMascotas());

console.log(joaquin.getBookNames());