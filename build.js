const { Liquid } = require("liquidjs");
const fs = require("fs").promises;
const engine = new Liquid({
  root: `${__dirname}/page`,
  extname: ".liquid"
});

engine
  .renderFile("index", { preview: false })
  .then(string => {
    return fs.writeFile(`${__dirname}/page/index.html`, string, { flag: "w+" });
  })
  .catch(reason => {
    console.log(reason);
  });
