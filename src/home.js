const homePage = () => {
    const contentSection = document.getElementById('content');
    let homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    let homeCTA = document.createElement("a");
    homeCTA.classList.add("home-cta");
    homeCTA.setAttribute("target","_blank");
    homeCTA.setAttribute("rel","noreferrer");
    homeCTA.textContent = "Book a Table";

    let homeTag = document.createElement("p");
    homeTag.classList.add("home-tagline");
    homeTag.textContent = "It's almost always meat!";

    contentSection.appendChild(homeContainer)
    homeContainer.appendChild(homeCTA);
    homeContainer.appendChild(homeTag);
};

export { homePage };