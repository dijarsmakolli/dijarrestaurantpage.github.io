
function about(){
    const div = document.createElement('div');
    div.classList.add('about');

    const h3 = document.createElement('h3');
    h3.textContent='Información';

    const p = document.createElement('p');
    p.textContent = 'Atendemos en Quito/Cuenca/Ambato de 12H00 a 23H00 y en Guayaquil de 12H00 a 24H00 de lunes a domingo. Zona de reparto limitada. La garantía de 30 minutos o gratis aplica hasta su portería en órdenes hasta 4 productos que pasan por horno. La garantía de 30 minutos o gratis No aplica en Ambato y Cuenca. Las pizzas gratis no son cobradas a nuestros repartidores. Los precios pueden cambiar sin previo aviso. Precios válidos hasta el 31 de Diciembre del 2021.';

    div.appendChild(h3);
    div.appendChild(p);
    return div;
}

function loadAbout(){
    const main = document.getElementById('main');
    main.textContent=''
    main.appendChild(about());
}

export default loadAbout;
