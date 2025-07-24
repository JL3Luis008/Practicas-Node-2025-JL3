// Importa el módulo nativo 'http' de Node.js para crear el servidor.
const http = require('http');

// Crea el servidor HTTP y define la función que manejará cada petición.
const server = http.createServer((req, res) => {

  // Si la URL solicitada es la raíz ('/'), responde con la página de inicio.
  if (req.url === '/') {
    // Establece el código de estado 200 (OK) y el tipo de contenido como HTML.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Envía el contenido HTML para la página de inicio.
    res.end('<h1>Página de Inicio</h1>');
  }
  // Si la URL solicitada es '/about', responde con la página "Sobre nosotros".
  else if (req.url === '/about') {
    // Establece el código de estado 200 (OK) y el tipo de contenido como HTML.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Envía el contenido HTML para la página "Sobre nosotros".
    res.end('<h2>Sobre nosotros</h2>');
  }
  // Para cualquier otra ruta, responde con un error 404 (No encontrado).
  else {
    // Establece el código de estado 404 (No encontrado) y el tipo de contenido como HTML.
    res.writeHead(404, { 'Content-Type': 'text/html' });
    // Envía el contenido HTML para la página no encontrada.
    res.end('<h1>Página no encontrada</h1>');
  }

});

// Inicia el servidor y lo pone a escuchar en el puerto 3000.
// Cuando el servidor está listo, muestra un mensaje en la consola.
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});