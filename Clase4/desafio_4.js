const fs = require('fs');

class Contenedor {
  constructor(file) {
    this.file = file
    this.productos = []
  };

  async save(object) {
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8')
      this.productos = JSON.parse(data)

      if(this.productos.length === 0) {
        let producto = {id: 0, ...object}
        this.productos.push(producto)
        await fs.promises.writeFile(this.file, JSON.stringify(this.productos, null, 2))
        return console.log(producto.id);
      } else {        
        let id = this.productos[this.productos.length - 1].id + 1
        let producto = {id: id, ...object}
        this.productos.push(producto)
        await fs.promises.writeFile(this.file, JSON.stringify(this.productos, null, 2))
        return console.log(producto.id);
      }

    } catch (error) {
      console.error(error);
    }
  };

  async getById(id) {
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8')
      if(data === '') return

      this.productos = JSON.parse(data)
      this.productos.forEach(x => {
        if(x.id === id) return console.log(x);
      });
    } catch (error) {
      console.error(error);
    };
  };

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8')
      if(data === '') return

      this.productos = JSON.parse(data)
      return console.log(this.productos);    
    } catch (error) {
      console.error(error);
    };
  };

  async deleteById(id) {
    try {
      const data = await fs.promises.readFile(this.file, 'utf-8')
      if(data === '') return

      this.productos = JSON.parse(data)
      for(let i = 0; i < this.productos.length; i++){    
        if (this.productos[i].id === id) {
          this.productos.splice(i, 1)
          try {
            await fs.promises.unlink(this.file)
            await fs.promises.writeFile(this.file, JSON.stringify(this.productos, null, 2))
          } catch (error) {
            console.error(error);
          };
        };
      };
    } catch (error) {
      console.error(error);
    };
  };

  async deleteAll() {
    try {
      this.productos = []
      await fs.promises.writeFile(this.file, JSON.stringify(this.productos, null, 2))
    } catch (error) {
      console.error(error);
    };
  };
}

const cont = new Contenedor('./productos.json')


cont.save({nombre: 'Notebook', precio: 150000})

cont.getById(2)

cont.getAll()

cont.deleteById(4)

// cont.deleteAll()