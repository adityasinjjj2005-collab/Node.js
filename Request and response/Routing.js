const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>big bro</title></head>");
    res.write("<body><h1>hnamaste mar thbbcbxcbcbvcbc</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>coading classes</title></head>");
    res.write("<body><h1>hello learning coading with kg coadingr</h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>AdityaSINGH</title></head>");
    res.write("<body><h1>hello everyone myself is our big brother</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3020;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT} `);
});
