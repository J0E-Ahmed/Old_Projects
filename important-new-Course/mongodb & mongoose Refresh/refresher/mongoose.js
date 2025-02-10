const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://youssefahmed:POIUYTREWQ@cluster0.ydqmzuw.mongodb.net/products_test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.getProduct = getProduct;
exports.createProduct = createProduct;
