const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

server.on('Error', error => console.error(`Error: ${error}`));

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

      this.productos = [...JSON.parse(data)]
      return this.productos;    
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

const contenedor = new Contenedor('./productos.json');

app.get(('/'), (req, res) => {
  res.send('<a href="/productos">Productos</a>\n<a href="/productoRandom">Producto Random</a>')
})

app.get(('/productos'), async (req, res) => {
  res.send(await contenedor.getAll())
})

app.get(('/productoRandom'), async (req, res) => {
  let productos = await contenedor.getAll()
  let index = Math.floor(Math.random() * productos.length)

  res.send(productos[index])
})

