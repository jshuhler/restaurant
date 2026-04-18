const menu = [
    {
        name: "The Standard",
        text: "Hotdog, ketchup, mustard, on a white bread bun",
        price: "$3.99",
    },
    {
        name: "The Texan",
        text: "Brisket stuffed brat, jalapeño slaw, BBQ drizzle on Texas toast",
        price: "$6.99",
    },
    {
        name: "The Morning After",
        text: "Maple brat, candied bacon, fried egg, hot sauce on a biscuit bun",
        price: "$5.99",
    },
    {
        name: "The Za",
        text: "An entire pepperoni, mozz, marinara, on a garlic pizza dough bun",
        price: "$5.99",
    },
    {
        name: "The Forest Floor",
        text: "Mushroom dog, arugula, truffle aioli, dirt sauce on a gluten free, vegan bun",
        price: "$0.99",
    },
    {
        name: "The Philly Special",
        text: "Shaved beef dog, whiz, grilled onions on a sesame seed bun",
        price: "$41.33",
    },
];

const contentSection = document.getElementById('content');


const menuItem = function(name,text,price,menuContainer) {
    let menuCard = document.createElement("div");    
    menuCard.classList.add("menu-card");

    let itemTitle = document.createElement("h1");
    itemTitle.classList.add("card-title");
    itemTitle.textContent = name;

    let itemText = document.createElement("p");
    itemText.classList.add("card-description");
    itemText.textContent = text;

    let itemPrice = document.createElement("p");
    itemPrice.classList.add("card-price");
    itemPrice.textContent = price;

    menuCard.appendChild(itemTitle);
    menuCard.appendChild(itemText);
    menuCard.appendChild(itemPrice);
    menuContainer.appendChild(menuCard);
};

const menuPage = () => {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-card-container");
    // menu title
    let menuTitle = document.createElement("p");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Our Current Weiner Offerings";
    // menu items
    for (let i = 0; i < menu.length; i++) {
        menuItem(menu[i].name, menu[i].text, menu[i].price, menuContainer)
    };
    contentSection.appendChild(menuContainer);
};

export { menuPage };