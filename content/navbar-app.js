const http = require("http");
const { readFileSync } = require("fs");

const portID = 5000;

//get all files
const homeHTML = readFileSync("./content/navbar-app/index.html");
const homeStyles = readFileSync("./content/navbar-app/styles.css");
const homeImage = readFileSync("./content/navbar-app/logo.svg");
const homeLogic = readFileSync("./content/navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  url = req.url;
  //console.log(url);

  //homeHTML
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeHTML);
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "text/svg + xml" });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascrpit" });
    res.write(homeLogic);
    res.end();
  }
  //abuot page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
  }
  //error page(404)
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
  }
});

server.listen(portID, () => {
  console.log(`Server is listening on port ${portID}...`);
});
