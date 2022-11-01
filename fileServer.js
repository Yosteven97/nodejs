const http = require('http')
const fs = require('fs')

// * read files
http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
}).listen(3004)

// * create files
fs.appendFile('mynewfile1.txt', 'Hello Content!', (err) => {
    if (err) throw err
    console.log('Saved!')
})

fs.open('mynewfile2.txt', 'w', (err) => {
    if (err) throw err
    console.log('Saved!')
})

fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
    if (err) throw err
    console.log('Saved!')
})

// * append files
fs.appendFile('mynewfile1.txt', 'This is my text.', (err) => {
    if (err) throw err
    console.log('Updated!')
})

fs.writeFile('mynewfile3.txt', 'This is my text', (err) => {
    if (err) throw err
    console.log('Replaced!')
})

// * delete files
fs.unlink('mynewfile2.txt', (err) => {
    if (err) throw err
    console.log('File deleted!')
})

// * rename files
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
    if (err) throw err
    console.log('File Renamed!')
})