import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";
 
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const homeCTA = document.querySelector(".home-cta");

const contentSection = document.getElementById('content');

homeBtn.addEventListener('click', () => {
    while (contentSection.firstChild) {
        contentSection.removeChild(contentSection.firstChild);
    }
    homePage();
});

menuBtn.addEventListener('click', () => {
    while (contentSection.firstChild) {
        contentSection.removeChild(contentSection.firstChild);
    }
    menuPage();
});

aboutBtn.addEventListener('click', () => {
    while (contentSection.firstChild) {
        contentSection.removeChild(contentSection.firstChild);
    }
    aboutPage();
})

homePage();
console.log("Let's eat.");