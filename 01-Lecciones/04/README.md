# Práctica 04: Servidor HTTP Básico

## Objetivo

Aprender a crear un servidor HTTP básico utilizando el módulo nativo `http` de Node.js, manejando rutas simples y respuestas personalizadas.

## Instrucciones

1. Clona este repositorio en tu máquina local:

   ```sh
   git clone https://github.com/Inadaptados/2025-2-B-Node.git
   ```

2. Navega a la carpeta de la práctica:

   ```sh
   cd 01.Learn/04
   ```

3. Instala las dependencias necesarias (si las hay):

   ```sh
   npm install
   ```

4. Inicia el servidor:

   ```sh
   node server.js
   ```

5. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la página de inicio.

## Endpoints disponibles

- `GET /`
  Muestra la página de inicio con el mensaje **"Página de Inicio"**.
- `GET /about`
  Muestra la página **"Sobre nosotros"**.
- Cualquier otra ruta
  Muestra el mensaje **"Página no encontrada"** (error 404).

## Código principal

El servidor está implementado en el archivo `server.js` usando solo el módulo `http` de Node.js, sin dependencias externas.

## Notas

- No hay dependencias adicionales para esta práctica.
- Asegúrate de tener Node.js y npm instalados en tu máquina.
- Puedes modificar los mensajes HTML para personalizar las respuestas.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
