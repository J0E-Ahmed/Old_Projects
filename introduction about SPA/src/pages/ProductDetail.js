import { Link, useParams } from "react-router-dom";
function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>product details</h1>
      <h3>{params.productId}</h3>{" "}
      {/*  params in  =>  products/:productId  it's about changing after  : in this case ' productId '  */}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
