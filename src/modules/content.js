const menuPizza = [
    {
        name: 'Pizza Pepperoni Lovers',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/ppel_d.jpg'
    },
    {
        name: 'Pizza Hawaiana Lovers',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/phyl_d.jpg'
    },
    {
        name: 'Pizza Veggie Lovers',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pvel_d.jpg'
    },
    {
        name: 'Pizza Meat Suprema',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pmes_d.jpg'
    },
    {
        name: 'Pizza Chicken BBQ Suprema',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pcbs_d.jpg'
    },
    {
        name: 'Pizza Suprema',
        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/psup_d.jpg'
    }
]

function cellPizza(p){
    let pizza = document.createElement('div');
    pizza.classList.add('pizza');
    let h3 = document.createElement('h3');
    h3.textContent = p.name;
    let img = document.createElement('img');
    img.classList.add('imgPizza');
    img.setAttribute('src', p.img);
    pizza.appendChild(h3);
    pizza.appendChild(img);

    return pizza;
}

function gridPizzas (){
    const divGrid = document.createElement('div');
    divGrid.classList.add('menuGrid');
        
    for(let i of menuPizza){
        const pizza = cellPizza(i);
        divGrid.appendChild(pizza); 
    }
    return divGrid;
}

function loadContent(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.appendChild(gridPizzas());

    main.appendChild(div);
}

export default loadContent;
