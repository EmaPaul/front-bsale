<h1>Bsale-Store <img  src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1663220828/banner/iconoBsale_mkkwpk.jpg"/></h1>

## Descripcion

Tienda online creada para completar un desafio, que nos permite buscar productos, filtrandolos por nombre, categoria, precio y descuento.
<br/>
<br/>
## Tecnologias Utilizadas

Para la realizacion de esta tienda virtual se utilizo vanilla js, HTML y CSS, adicionalmente la llamada a la informacion se realiza a traves del peticionario fetch, que trae la informacion del backend conectado a una base de datos en mysql, que forma igualmente parte del desafio.
<br/>
<br/>
## Funcionabilidades

<li>Una barra de navegacion que recorre las categorias de los productos, mostrando los productos relacionados a dicha categoria al hacer click en una de las opciones. Adicionalmente se tiene un boton de inicio donde al darle click mostrara todos los productos de la tienda.</li>
<br/>
<img src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1665971669/proyectos/barra_de_navegacion_crbotb.png"/>

<br/>
<li> Un buscador que trae el producto o los productos relacionados al nombre que se ponga en la entrada, adicionalmente el producto aparece con una etiqueta si este tiene un descuento.</li>

<br/>

<img src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1665972117/proyectos/buscador_ln5iqo.png"/>

<br/>

<li>Un filtro que al colocar en las entradas un rango de precios y de descuento, muestra los productos que tienen un descuento y que estan dentro del rango de precio colocado, que tambien se puede ver dicho rango de precios y descuentos por categorias haciendo click en cada una de ellas.</li>

<br/>

<img src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1665972559/proyectos/filtro_ldsrmy.png"/>

<br/>
La tienda recibe los productos de la Api, trayendolos a traves de la funcion "getProductFilter", despues se crean las cards de los productos con la funcion "productCards" la cual cuenta con condicionales para determinar cuales productos tienen descuento para hacer la reduccion de precio del producto. Adicionalmente "STORE" guarda los filtros que seran usados en la busqueda de productos, y despues se pasa a la rederizacion donde en la pagina se mostrara los componentes creados. 

<br/>
<h2>Imagen de muestra:</h2>
<br/>
<img src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1665974840/proyectos/tienda_imagen_muestra_hr4qfm.png"/>

<br/>
<h2>Ejecutar la tienda de manera local</h2>

Para poder ejecutar la tienda de manera local solo se necesita un servidor en vivo de preferencia tener instalada la extension "live Server" en caso de ser abierto el repositorio en VSC.

<h2>Produccion</h2>

Esta tienda fue deployada con vercel.

<li>Bsale-Store: <a href="https://front-bsale-emapaul.vercel.app/">https://front-bsale-emapaul.vercel.app/</a></li>

<br/>
<h2>Portafolio</h2>
<ul>
<li><a href="https://portafolio-ema-paul.vercel.app/">Sobre mi 😄</a></li>
</ul>
