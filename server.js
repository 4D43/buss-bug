const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

app.get('*', (req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html'; // Archivo HTML predeterminado
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Archivo no encontrado
        res.writeHead(404);
        res.end('Archivo no encontrado');
      } else {
        // Error del servidor
        res.writeHead(500);
        res.end(`Error del servidor: ${err.code}`);
      }
    } else {
      // Archivo encontrado, servirlo
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});
