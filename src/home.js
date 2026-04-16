export const homePage = () => {
    // const contentSection = document.getElementById('content');
    
    // call to action
    let homeCTA = document.createElement("a");
    homeCTA.classList.add("home-cta");
    homeCTA.setAttribute("href",""); // make this go to the ABOUT US page in the future
    homeCTA.setAttribute("target","_blank");
    homeCTA.setAttribute("rel","noreferrer");
    homeCTA.textContent = "Book a Table";

    // tagline
    let homeTag = document.createElement("p");
    homeTag.classList.add("home-tagline");
    homeTag.textContent = "It's almost always meat!";

    contentSection.appendChild(homeCTA);
    contentSection.appendChild(homeTag);

    return { homeCTA, homeTag };
}