import { useParams } from "react-router-dom";
import "./ProductsDetailsPage.css";
function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetailsPage;