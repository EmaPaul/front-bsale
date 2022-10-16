import {rederizarPagina } from "./render.js";
import STORE from "./store.js";

rederizarPagina();

// Agrega un escuchador para la búsqueda por nombre.

const formulario = document.getElementById('search');
formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = e.target.elements.name.value;
  STORE.changeName(name);
  STORE.changeCategory({
    id: "0",
    name: "Todas"
  });
  // renderiza y actualiza la vista 
  rederizarPagina();
});


// Agrega un escuchador para la búsqueda por categoría.

const categorias = document.querySelectorAll('.navbar-item-category');
categorias.forEach(category => {
  category.addEventListener('click', function(e){
    const categoryId = e.target.dataset.category;
    const categoryName = e.target.innerText;
    STORE.changeCategory({
      id: categoryId,
      name: categoryName
    });
    // luego renderiza los cambios de la vista
    rederizarPagina();
  });
});


// Agrega un escuchador para el filtro por precio y descuentos. luego renderiza los cambios de la vista

const filtroNumerico = document.getElementById('numeric-filters');
filtroNumerico.addEventListener('submit', (e) => {
  e.preventDefault();
  const minprice = e.target.elements.minprice.value;
  const maxprice = e.target.elements.maxprice.value;
  const mindiscount = e.target.elements.mindiscount.value;
  const maxdiscount = e.target.elements.maxdiscount.value;
  STORE.changeMinPrice(minprice);
  STORE.changeMaxPrice(maxprice);
  STORE.changeMinDiscount(mindiscount);
  STORE.changeMaxDiscount(maxdiscount);
  
  // luego renderiza los cambios de la vista
  rederizarPagina();
});