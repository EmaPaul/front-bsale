import productCards from "../components/ProductCard.js";
import { getProductFilter } from "../services/productFetch.js";
import STORE from "./store.js";

// renderizarPagina actualiza la pagina con los nuevos productos y otros indicadores de filtros

export async function rederizarPagina() {
  
  // Se añade un spinner de carga mientras aparecen los productos
  const productosLista = document.querySelector('#products-list-container');
  productosLista.innerHTML = `
    <div class="loader">Cargando
      <span class="loading"></span>
    </div>
  `;

  // Elimina la clase que indica la categoria seleccionada previamente
  const seleccionPrevia = document.querySelector('.navbar-item-category.selected');
  if (seleccionPrevia) {
    seleccionPrevia.classList.remove('selected');
  }

  // Agrega la clase que indica la categoria seleccionada actualmente
  const nuevaSeleccion = document.querySelector(`[data-category="${STORE.category.id}"]`);
  nuevaSeleccion.classList.add('selected');


   // Obtiene los productos de la API y los muestra en la página
  try {
    const data = await  getProductFilter(
      STORE.name, 
      STORE.category.id,
      STORE.minprice,
      STORE.maxprice,
      STORE.mindiscount,
      STORE.maxdiscount
    );
    if (data.productos.length > 0) {
      productosLista.innerHTML = "";
      data.productos.forEach(product => {
        productosLista.innerHTML += productCards(product);
      });
    } else {
      productosLista.innerHTML = `
        <div class="no-results">
          <p>No hay resultados</p>
        </div>
      `;
    }
  } catch(error) {
    productosLista.innerHTML = `
      <div class="no-results">
        <p>${error}</p>
      </div>
    `;
  }
}
