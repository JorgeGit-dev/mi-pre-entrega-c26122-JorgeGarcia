import "./Item.css";

export const Item = ({ producto, marca, presentacion, peso, precio_kilo, precio_caja, descripcion, imagen, children }) => {

  const formatearPrecio = (precio) => {
  if (typeof precio === "number") {
    return precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  }

  return precio;
};

  return (
    <article className="card">
     <img src={imagen} alt={`Detalle del producto ${producto}`} />
      <h3>{producto}</h3>
      <p>{marca}</p>
      <p>{presentacion}</p>
      <p>{peso}</p>
      <p>Precio por kilo: {formatearPrecio(precio_kilo)}</p>
      <p>Precio por caja: {formatearPrecio(precio_caja)}</p>
      <p>{descripcion}</p>
      
      {children}
    </article>
  );
};
