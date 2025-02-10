import { Link } from "react-router-dom";
const Products = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];
function ProductsPage() {
  return (
    <>
      <h1>The product page</h1>
      <ul>
        {Products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
