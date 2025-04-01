import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 5000;

// Mapa de tipos MIME
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

const server = createServer(async (req, res) => {
  try {
    console.log(`${req.method} ${req.url}`);
    
    // Normalizar la URL eliminando parámetros de consulta
    let url = req.url.split('?')[0];
    
    // Si la URL termina con /, servir index.html
    if (url.endsWith('/')) {
      url += 'index.html';
    }
    
    // Para rutas SPA, devuelve index.html para rutas que no tienen extensión
    if (!extname(url) && !url.includes('.')) {
      url = '/index.html';
    }
    
    // Resolver la ruta del archivo
    const filePath = join(__dirname, 'dist', 'public', url);
    
    // Leer el archivo
    const content = await readFile(filePath);
    
    // Obtener el tipo MIME según la extensión
    const ext = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Enviar respuesta
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
    
  } catch (err) {
    console.error(`Error serving ${req.url}:`, err);
    
    // Para rutas SPA, intentar devolver index.html para 404s
    try {
      const content = await readFile(join(__dirname, 'dist', 'public', 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch (indexErr) {
      // Si no se puede servir index.html, enviar 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor estático iniciado en http://0.0.0.0:${PORT}`);
});