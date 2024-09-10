const express = require('express');
const app = express();
const port = 5000; // Cambiar al puerto 5000

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación Node.js con Docker!');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' },
  ];
  res.json(clientes);
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
  ];
  res.json(productos);
});

// Iniciar el servidor en el puerto 5000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

