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

export const aboutPage = () => {
    // about container
    let aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    // about items
    aboutItem("Who we are","Certainly not a giant sentient hotdog selling its smaller breathren to be eaten.");
    aboutItem("Location","You'll find us when you're ready.");
    aboutItem("Reservations","givemehotdogs@ilovehot.dogs");
    aboutItem("Hours","Open 24/7 (except Wednesdays)");

    contentSection.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTile);
    aboutTile.appendChild(aboutTitle);
    aboutTile.appendChild(aboutText);
};