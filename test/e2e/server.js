import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const mimeTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.jfif': 'image/jpeg' };

export function startSiteServer() {
  const server = http.createServer(async (request, response) => {
    const requestedPath = request.url.split('?')[0] || '/';
    const filePath = path.resolve(root, `.${requestedPath === '/' ? '/index.html' : requestedPath}`);
    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end();
      return;
    }
    try {
      const body = await fs.readFile(filePath);
      response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end('Not found');
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ server, url: `http://127.0.0.1:${server.address().port}` })));
}
