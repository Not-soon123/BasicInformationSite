const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(req.url);

        const data = fs.readFileSync('index.html', 'utf8');
        res.write(data);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const data = fs.readFileSync('about.html', 'utf8');
        res.write(data);
        console.log(req.url);

    }
    else if (req.url === '/contact-me') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        

        const data = fs.readFileSync('contact-me.html', 'utf8');
        res.write(data);
        console.log(req.url);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });


        const data = fs.readFileSync('404.html', 'utf8');
        res.write(data);
        console.log(req.url);

    }
    res.end();
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});