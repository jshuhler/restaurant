const faq = [
    {
        title: "Who we are",
        text: "Certainly not a giant sentient hotdog selling its smaller breathren to be eaten.",
    },
    {
        title: "Location",
        text: "You'll find us when you're ready.",
    },
    {
        title: "Reservations",
        text: "givemehotdogs@ilovehot.dogs",
    },
    {
        title: "Hours",
        text: "Open 24/7 (except Mondays and Wednesdays)",
    },
]
const contentSection = document.getElementById('content');
const aboutItem = function(title,text) {
    let aboutTile = document.createElement("div");
        aboutTile.classList.add("about-tile");
    let aboutTitle = document.createElement("p");
        aboutTitle.classList.add("title");
        aboutTitle.textContent = title;
    let aboutText = document.createElement("p");
        aboutText.classList.add("text");
        aboutText.textContent = text;
};

const aboutPage = () => {
    // about container
    let aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    // about items


    contentSection.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTile);
    aboutTile.appendChild(aboutTitle);
    aboutTile.appendChild(aboutText);
};

export { aboutPage };