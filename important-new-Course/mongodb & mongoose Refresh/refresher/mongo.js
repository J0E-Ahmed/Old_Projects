const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://youssefahmed:POIUYTREWQ@cluster0.ydqmzuw.mongodb.net/products_test?retryWrites=true&w=majority&appName=Cluster0";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();
  res.json(newProduct);
};

const getProduct = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could retrieve products" });
  }
  client.close();
  res.json(products);
};
exports.getProduct = getProduct;
exports.createProduct = createProduct;
