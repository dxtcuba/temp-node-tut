const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1 style="color:red">WELCOME TO OUR HOME PAGE</h1>')
  }
  if (req.url === '/about') {
    res.end('<h1 style="color:red">ABOUT PAGE</h1>')
  }

  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>`)
})

server.listen(5000)
