const http = require('http');
const displayContent = require("./routes.js")

const server = http.createServer(displayContent);


server.listen(3000);
