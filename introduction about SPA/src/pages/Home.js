import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function HandleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <h1>my Home Page</h1>
      <p>
        <button onClick={HandleNavigate}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
