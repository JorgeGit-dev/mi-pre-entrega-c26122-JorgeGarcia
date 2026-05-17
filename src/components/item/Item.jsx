import "./Item.css";

export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={`Imagen del Producto ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toLocaleString("es-AR", {style: "currency", currency: "ARS", })}</p>

      {children}
    </article>
  );
};