import { useParams } from "react-router-dom";
import "./ProductsDetailsPage.css";
function ProductDetailsPage() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetailsPage;