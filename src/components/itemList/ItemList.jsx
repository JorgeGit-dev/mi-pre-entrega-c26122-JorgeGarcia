import { Link } from "react-router-dom";
import { Item } from "../item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((producto) => (
        <Link key={producto.id} to={`/product/${producto.id}`} aria-label={`Ver detalle de ${producto.name}`}>
          <Item {...producto} />
        </Link>
      ))}
    </div>
  );
};
