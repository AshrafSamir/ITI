const fs = require("fs");
const express = require("express");

const path = require("path");
const app = express();
const port = process.env.PORT || 7003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "../ClientSide")));



var welcomeHtml = fs.readFileSync("../ClientSide/welcome.html").toString();

let userData = {
  Name: "",
  Email: "",
  Phone: "",
  Address: "",
};




// app.post(mainHtml,(req, res)=>{
// })

app.post("/welcome.html",(req, res)=>{
  console.log("post here");
  console.log(req.body);
  userData = req.body;
  
  welcomeHtml = welcomeHtml.replace("{Name}", userData.Name);
  welcomeHtml = welcomeHtml.replace("{Email}", userData.Email);
  welcomeHtml = welcomeHtml.replace("{Phone}", userData.Phone);
  welcomeHtml = welcomeHtml.replace("{Address}", userData.Address);


  res.send(welcomeHtml);
  
  welcomeHtml = welcomeHtml.replace(userData.Name, "{Name}");
  welcomeHtml = welcomeHtml.replace(userData.Email, "{Email}");
  welcomeHtml = welcomeHtml.replace(userData.Phone, "{Phone}");
  welcomeHtml = welcomeHtml.replace(userData.Address, "{Address}");

  let jsonData = [];
  fs.readFile("../ClientSide/data.json", (err, data) => {
    if (err) throw err;
    jsonData = JSON.parse(data);
    jsonData.push(userData);
    data = JSON.stringify(jsonData);
    fs.writeFile("../ClientSide/data.json", data, (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });
  });
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


