const faq = [
    {
        title: "Who we are",
        text: "Certainly not a giant sentient hotdog selling its smaller, weaker breathren to be eaten.",
    },
    {
        title: "Location",
        text: "You'll find us when you're ready.",
    },
    {
        title: "Reservations",
        text: "(555) 438-3647",
    },
    {
        title: "Hours",
        text: "Open 24/7 (except Mondays and Wednesdays)",
    },
];

const contentSection = document.getElementById('content');

const aboutItem = function(title,text,aboutContainer) {
    let aboutTile = document.createElement("div");
    aboutTile.classList.add("about-tile");

    let aboutTitle = document.createElement("p");
    aboutTitle.classList.add("title");
    aboutTitle.textContent = title;
    aboutTile.appendChild(aboutTitle);
    
    let aboutText = document.createElement("p");
    aboutText.classList.add("text");
    aboutText.textContent = text;
    aboutTile.appendChild(aboutText);

    aboutContainer.appendChild(aboutTile);
};

const aboutPage = () => {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    for (let i = 0; i < faq.length; i++) {
        aboutItem(faq[i].title, faq[i].text, aboutContainer)
    };
    contentSection.appendChild(aboutContainer);
};

export { aboutPage };