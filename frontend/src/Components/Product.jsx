import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="p-3 rounded h-100 product-card">
      {/* Single stretched link for the entire card */}
      <Link to={`/product/${product._id}`} className="stretched-link"></Link>

      <Card.Img src={product.image} className="img-fluid" />

      <Card.Body className="text-center">
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>

      {/* Hover Preview Div */}
      <div className="product-hover-preview">
        <h5>More about {product.name}</h5>
        {/* Additional details */}
      </div>
    </Card>
  );
};

export default Product;
