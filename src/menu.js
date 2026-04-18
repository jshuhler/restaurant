const contentSection = document.getElementById('content');
const menuItem = function(name,text,price) {
    let menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    let itemTitle = document.createElement("h1")
    itemTitle.classList.add("card-title");
    itemTitle.textContent = name;
    let itemText = document.createElement("p");
    itemText.classList.add("card-description");
    itemText.textContent = text;
    let itemPrice = document.createElement("p");
    itemPrice.classList.add("card-price");
    itemPrice.textContent = price;
    return { menuCard, itemTitle, itemText, itemPrice }
}

export const menuPage = () => {
    // menu title
    let menuTitle = document.createElement("p");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Our Current Weiner Offerings";
    // menu container
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-card-container");
    // menu items
    menuItem("The Standard","Hotdog, ketchup, mustard, on a white bread bun","$3.99");
    menuItem("The Texan","Brisket stuffed brat, jalapeño slaw, BBQ drizzle on Texas toast","$6.99");
    menuItem("The Morning After","Maple brat, candied bacon, fried egg, hot sauce on a biscuit bun","$5.99");
    menuItem("The Za","An entire pepperoni, mozzerlla, marinara, on a garlic pizza dough bun","$6.99");
    menuItem("The Forest Floor","Mushroom dog, arugula, truffle aioli, dirt sauce on a gluten free, vegan bun","$0.99");
    menuItem("The Philly Special","Shaved beef dog, whiz, grilled onions on a sesame seed bun","$41.33");

    contentSection.appendChild(menuContainer);
    menuContainer.appendChild(menuCard);
    menuCard.appendChild(itemTitle);
    menuCard.appendChild(itemText);
    menuCard.appendChild(itemPrice);
}

