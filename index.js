let http = require("http");
let dt = require("./module");
let url = require("url");
let fs = require("fs");
let adr = "http://localhost:8080/default.thml?year=2024&month=january";
let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("The date and time are currently: " + dt.dataTime());
    // res.write("Hello World!");
    // res.write(req.url);
    // if (req.url == "/maxim") {
    //   res.write("Maxim is requie");
    // } else {
    //   res.write(req.url);
    // }
    // let q = url.parse(req.url, true).query;
    // let txt = q.year + " Maxim " + q.month;
    // fs.readFile("index.html", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
    // fs.appendFile("file.txt", "Hello From New File", (err) => {
    //   if (err) throw err;
    //   console.log("Saved");
    // });
    // fs.open("file2.txt", "w", (err, file) => {
    //   if (err) throw err;
    //   console.log("saved");
    // });
    // fs.writeFile("file3.txt", "Hello from File 3", (err) => {
    //   if (err) throw err;
    //   console.log("saved");
    // });
    // fs.appendFile("file.txt", "This is a new text", (err) => {
    //   if (err) throw err;
    //   console.log("saved");
    // });
    // fs.writeFile("file3.txt", "This is a new text", (err) => {
    //   if (err) throw err;
    //   console.log("saved");
    // });
    // fs.unlink("file2.txt", (err) => {
    //   if (err) throw err;
    //   console.log("File Deleted");
    // });
    // fs.rename("file.txt", "file1.txt", (err) => {
    //   if (err) throw err;
    //   console.log("File Renamed");
    // });
  })
  .listen(8080);
