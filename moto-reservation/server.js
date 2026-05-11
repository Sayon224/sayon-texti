const http = require('http');
const fs   = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'application/javascript',
    '.css':  'text/css',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
    let url = req.url === '/' ? '/index.html' : req.url;
    const file = path.join(__dirname, url.split('?')[0]);
    const ext  = path.extname(file);

    fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); res.end('404 Not Found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
        res.end(data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('Serveur SAYON MOTO TAXI EXPRESS demarre !');
    console.log('Adresse : http://localhost:' + PORT);
    console.log('Appuyez sur CTRL+C ou fermez cette fenetre pour arreter.');
    exec('start http://localhost:' + PORT);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('ERREUR : Le port ' + PORT + ' est deja utilise.');
        console.log('Fermez l\'autre fenetre du serveur et relancez.');
    } else {
        console.log('Erreur serveur:', err.message);
    }
    process.exit(1);
});
