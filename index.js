const http = require('http');
const fs = require('fs');
const port = 3000;

const fileToContnetType = {
  html: "text/html",
  js: "text/json"
}

const getFileExtension = filePath => filePath.split('.').pop();

const server = http.createServer((request, response) => {
  console.log(`GOT URL - ${request.url}`);
  if (request.url === '/') {
    const html = fs.readFileSync('./public/index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }
  else if (request.url === '/favicon.ico'){
    response.end();
  }
  else if (request.url) {
    const contentType = fileToContnetType[getFileExtension(request.url)];
    try{
      const file = fs.readFileSync('public' + request.url);
      response.writeHeader(200, {"Content-Type": contentType});
      response.write(file);
    }catch (e) {
      response.write(e + '');
    }

    response.end();
  }
});

server.listen(port);
console.log(`Server running on http://localhost:${port}`);
