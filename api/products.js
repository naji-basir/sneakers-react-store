import products from "../src/data/products.json";

export default function handler(req, res) {
  res.status(200).json(products);
}
