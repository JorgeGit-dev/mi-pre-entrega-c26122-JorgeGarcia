import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para traer productos
  const getProducts = () => {
    // setLoading(true);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  };

  // Funcion para vaciar productos
  const clearProducts = () => {
    setProducts([]);
  };

  // Cargar productos automaticamente al iniciar
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <button className="btn primary" onClick={getProducts}>
          Traer productos
        </button>

        <button className="btn primary" onClick={clearProducts}>
          Vaciar productos
        </button>
      </div>

      <ItemList products={products} />
    </section>
  );
};
