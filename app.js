/**Core Modules
 * http - launching a server and sending requests
 * https- launching ssl  server
 * fs- creating a file
 * path- constructing paths to files
 * os - helps with operating system specific
 */
const http = require("http");
// function rqListener(req, res) {

// }
// http.createServer(rqListener);

// http.createServer(function (req, res) {

// })
const server = http.createServer((req, res) => {
  //   console.log(req);
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'/> <input type='submit' value='Send'/></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first sever website</title></head>");
  res.write("<body><h1>My first sever website</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
