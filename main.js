const express = require("express");
const { Liquid } = require("liquidjs");
const app = express();
const engine = new Liquid();

const PORT = 4200;

app.engine("liquid", engine.express());
app.set("view engine", "liquid");
app.set("views", "./page/");
app.use(express.static(`${__dirname}/page/`));

app.get("/", (req, res, next) => {
  res.render("index", {
    preview: true,
    refreshScript: process.env.BROWSER_REFRESH_URL
  });
});

app.listen(PORT, () => {
  if (process.send) {
    process.send("online");
  }
  console.log(`Server listening on port ${PORT}`);
});
