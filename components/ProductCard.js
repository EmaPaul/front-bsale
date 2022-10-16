/*Creando las cards de los productos  */

const productCards=(product)=>{
  let imgProduct;
  let rederizarPrecio;
  
  (product.url_image)?imgProduct = product.url_image:  imgProduct = "./assets/images/Bsale.png";


  if (product.discount) {
    let descuento=product.price*(product.discount/100)
    let precioFinal = (product.price - descuento).toFixed(0) ;
    rederizarPrecio = `
      <div class="product-price">
        <p class="old-price">$ ${product.price}</p>
        <p class="price">$ ${precioFinal}</p>
      </div>
      <div>
        <p class="discount">- ${product.discount}%</p>
      </div>
    `
  } else {
    rederizarPrecio = `
      <div class="product-price">
        <p class="price">$ ${product.price}</p>
      </div>
    `
  }

  return `
    <div class="product-item">
      <div class="product-image">
        <img src="${imgProduct}" alt="${product.name}">
      </div>
      <h4>${product.name}</h4>
      ${rederizarPrecio}
    </div>
  `;
}

export default productCards;