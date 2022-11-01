const http = require('http')
const dateTime = require('./myfirstmodule')

const hostname = '127.0.0.1'
const port = 3000

// * create a server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'ext/plain')
    res.end('Hello World')
})

server.listen( port, hostname, () => {
    console.log(`Server running http://${hostname}:${port}/`)
    console.log(`The date and time are currently: ` + dateTime.myDateTime())
})

// * create a server2 object
http.createServer ((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("The date and time are currently: " + dateTime.myDateTime())
    res.end()
}).listen(3001)

// * create a server3 object (http url)
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
  }).listen(3002); //http://127.0.0.1:3002/server3

// * create a server4 object (query string)
const url = require('url')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    var q = url.parse(req.url, true).query
    var txt = q.year+ " " + q.month
    res.end(txt)
}).listen(3003) //http://127.0.0.1:3003/?year=2022&month=november