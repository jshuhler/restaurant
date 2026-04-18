import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";
 
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

const contentSection = document.getElementById('content');
const homeContainer = document.querySelector(".home-container");

homePage();

homeBtn.addEventListener('click', () => {
    contentSection.removeChild(homeContainer);
    // menuContainer.remove();
    // aboutContainer.remove();
    homePage();
});

console.log("Let's eat.");  