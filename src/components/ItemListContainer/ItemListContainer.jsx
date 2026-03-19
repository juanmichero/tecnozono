import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products as allProducts } from "../../data/products";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const categoryLabels = {
  ondas: "Generadores de Ondas Schumann",
  ducto: "Ductos para Indoor",
  canon: "Cañones de Ozono",
  generador: "Generadores de Ozono",
  agua: "Ozonizadores de Agua/Aceite",
  fuente: "Fuentes UPS/CCTV",
  luz: "Luces de Emergencia"
};

  useEffect(() => {
    if (category) document.title = category;
    else document.title = "TecnOzono";

    return () => {
      document.title = "TecnOzono";
    };
  }, [category]);

  // Si hay category -> comportamiento actual (filtrado)
  if (category) {
    const filteredProducts = allProducts.filter((prod) => prod.category === category);

    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center m-2">{greeting + category}</h1>
        <ItemList products={filteredProducts} />
      </div>
    );
  }

  // Si NO hay category -> Home agrupado por categorías (en el orden en que aparecen)
  const categoriesInOrder = [...new Set(allProducts.map((p) => p.category))];

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center m-2">{greeting}</h1>

      {categoriesInOrder.map((cat) => {
        const prods = allProducts.filter((p) => p.category === cat);

        return (
          <div key={cat} className="w-100">
            <h2 className="text-center mt-4 mb-3">{categoryLabels[cat] ?? cat}</h2>
            <ItemList products={prods} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
