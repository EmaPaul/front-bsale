// Traemos los productos de la api filtrandolos segun los parametros de la funcion

const BASE_URL = 'https://back-bsale-emapaul.vercel.app';

export function getProductFilter(name, category, minprice, maxprice, mindiscount,maxdiscount){
  const url = `${BASE_URL}/product/search?`;
  const consultas = [];
  (name === "")?consultas:consultas.push(`name=${name}`);
  (category == "0")?consultas:consultas.push(`category=${category}`);
  (minprice === "")?consultas:consultas.push(`pricemin=${minprice}`);
  (maxprice === "")?consultas:consultas.push(`pricemax=${maxprice}`);
  (mindiscount === "")?consultas:consultas.push(`discountmin=${mindiscount}`);
  (maxdiscount === "")?consultas:consultas.push(`discountmax=${maxdiscount}`);

  const respuesta = fetch(`${url}${consultas.join('&')}`)
  .then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      throw new Error('Hubo un error');
    }
  })
  return respuesta
}