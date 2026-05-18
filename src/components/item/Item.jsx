import "./Item.css";

export const Item = ({
  producto,
  marca,
  presentacion,
  peso,
  precio_kilo,
  precio_caja,
  descripcion,
  imagen,
  children,
}) => {

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
      <img
        src={imagen}
        alt={`Detalle del producto ${producto}`}
      />

      <h3>{producto}</h3>

      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Presentación:</strong> {presentacion}</p>
      <p><strong>Peso:</strong> {peso}</p>

      <p>
        <strong>Precio por kilo:</strong>{" "}
        {formatearPrecio(precio_kilo)}
      </p>

      <p>
        <strong>Precio por caja:</strong>{" "}
        {formatearPrecio(precio_caja)}
      </p>

      <p><strong>Description:</strong> {descripcion}</p>

      {children}
    </article>
  );
};
