const fs = require("fs");
const path = require("path");

const pathFile = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(pathFile, (err, data) => {
    if (err) {
      cb([]);
      return;
    } else {
      cb(JSON.parse(data));
    }
  });
};

class Product {
  constructor(title = "") {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}

module.exports = Product;
