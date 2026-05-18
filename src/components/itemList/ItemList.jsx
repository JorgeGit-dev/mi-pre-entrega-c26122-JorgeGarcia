import { Link } from "react-router-dom";
import { Item } from "../item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} aria-label={`Ver detalle de: ${product.producto} Marca: ${product.marca}`}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
