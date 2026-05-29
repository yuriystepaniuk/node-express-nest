import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/cars') {
        switch (req.method) {
            case 'GET':
                return res.end(JSON.stringify({
                    data: 'my cars'
                }));
            case 'POST':
                return res.end(JSON.stringify({
                    data: 'Want to create car'
                }));
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});