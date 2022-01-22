function messageHome(){
    const divTitle = document.createElement('div');
    divTitle.classList.add('titleHome');
    const i = document.createElement('i');
    i.classList.add('fa-pizza-slice');
    i.classList.add('fas');
    const h2 = document.createElement('h2');
    h2.textContent = "Si tienes hambre y quieres comer una deliciosa pizza, Mou´s pizza es la mejor opción. "

    

    divTitle.appendChild(i);
    divTitle.appendChild(h2);
    return divTitle;
}


function loadHome(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.classList.add('home');

    const img = document.createElement('img');
    img.setAttribute('src','./images/pizzaHome.svg');

    div.appendChild(messageHome());
    div.appendChild(img)
    main.appendChild(div);
}

export default loadHome;
