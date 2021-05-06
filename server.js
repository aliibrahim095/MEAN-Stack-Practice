const http = require("http");
const app = require("./backend/app");
const debug = require("debug")("node-angular");

//just normalization for port number
const normalizePort = (val) => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    //named pipe
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
// const server = http.createServer((req,res)=>{
//   res.end('this is my first response');
// })
const server = http.createServer(app);

//onError Function
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE": //---> E Address is in use
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};
//onListening Function
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
