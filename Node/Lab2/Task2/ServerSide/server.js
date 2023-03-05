const http = require("http");
const fs = require("fs");

var mainHtml = fs.readFileSync("../ClientSide/main.html").toString();
var welcomeHtml = fs.readFileSync("../ClientSide/welcome.html").toString();
var styleCSS = fs.readFileSync("../ClientSide/style.css").toString();
var scriptJS = fs.readFileSync("../ClientSide/script.js").toString();
var favIcon = fs.readFileSync("../ClientSide/favicon.ico");
let userData = {
  Name: "",
  Email: "",
  Phone: "",
  Address: "",
};

http
  .createServer((req, res) => {
    if (req.method == "GET") {
      switch (req.url) {
        case "/main.html":
        case "/ClientSide/main.html":
          res.write(mainHtml);
          break;
        case "/style.css":
        case "/ClientSide/style.css":
          res.write(styleCSS);
          break;
        case "/welcome.html":
        case "/ClientSide/welcome.html":
          res.write(welcomeHtml);
          break;
        case "/script.js":
        case "/ClientSide/script.js":
          res.write(scriptJS);
          break;
        case "/favicon.ico":
        case "/ClientSide/favicon.ico":
          res.write(favIcon);
          break;
        case "/data.json":
          console.log("here");
          let JsonFile = fs.readFileSync("../data.json").toString();
          res.write(JsonFile);
          break;
        default:
          if (req.url.includes("/ClientSide/welcome.html")) {
            res.write(welcomeHtml);
          } else {
            res.write("<h1>Page Not Found</h1>");
          }
          break;
      }
      res.end();
    } else if (req.method == "POST") {
      console.log("post here");
      req.on("data", function (data) {
        let regex = /\+/g;
        console.log(data.toString().split("="));
        let dataArr = data.toString().split("=");
        userData[dataArr[0]] = decodeURIComponent(
          dataArr[1].split("&")[0]
        ).replace(regex, " ");
        userData[dataArr[1].split("&")[1]] = decodeURIComponent(
          dataArr[2].split("&")[0]
        ).replace(regex, " ");
        userData[dataArr[2].split("&")[1]] = decodeURIComponent(
          dataArr[3].split("&")[0]
        ).replace(regex, " ");
        userData[dataArr[3].split("&")[1]] = decodeURIComponent(
          dataArr[4].split("&")[0]
        ).replace(regex, " ");

        console.log(userData);
      });
      req.on("end", () => {
        res.setHeader("content-type", "text/html");

        welcomeHtml = welcomeHtml.replace("{Name}", userData.Name);
        welcomeHtml = welcomeHtml.replace("{Email}", userData.Email);
        welcomeHtml = welcomeHtml.replace("{Phone}", userData.Phone);
        welcomeHtml = welcomeHtml.replace("{Address}", userData.Address);

        res.write(welcomeHtml);
        res.end();

        welcomeHtml = welcomeHtml.replace(userData.Name, "{Name}");
        welcomeHtml = welcomeHtml.replace(userData.Email, "{Email}");
        welcomeHtml = welcomeHtml.replace(userData.Phone, "{Phone}");
        welcomeHtml = welcomeHtml.replace(userData.Address, "{Address}");

        let jsonData = [];
        fs.readFile("../data.json", (err, data) => {
          if (err) throw err;
          jsonData = JSON.parse(data);
          jsonData.push(userData);
          data = JSON.stringify(jsonData);
          fs.writeFile("../data.json", data, (err) => {
            if (err) throw err;
            console.log("Data written to file");
          });
        });
      });
    } else if (req.method == "PUT") {
    } else if (req.method == "DELETE") {
    }
  })
  .listen("7002", () => {
    console.log("http://localhost:7002");
  });
