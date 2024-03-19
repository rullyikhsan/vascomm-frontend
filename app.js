const express = require("express");
var path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'))

app.use("/backend", express.static("public/backend"));
app.use("/frontend", express.static("public/frontend"));

app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.render("pages/frontend");
});

app.get("/admin", function (request, response) {
  response.render("pages/backend/dashboard");
});

app.get("/admin/dashboard", function (request, response) {
  response.render("pages/backend/dashboard");
});

app.get("/admin/product", function (request, response) {
  response.render("pages/backend/product");
});

app.get("/admin/user", function (request, response) {
  response.render("pages/backend/user");
});

// app.use(function (req, res, next) {
//   res.status(404).render("404", { url: req.originalUrl });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
