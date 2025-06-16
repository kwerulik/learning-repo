//1.import bibliotek
const http = require("http");
const app = require("./app");

//2.ustalam port na którym bedzie działał serwer
const port = process.env.PORT || 3000;

//3.Tworze serwer
const server = http.createServer(app);

//4.odpalam Serwer
server.listen(port);