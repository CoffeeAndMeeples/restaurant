import "./styles.css";
import { loadHome } from "./main_load.js";
import { loadAbout } from "./about_load.js";
//TODO actually make these two funcitons
import { loadMenu } from "./menu_load.js";
import { loadContact } from "./contact_load.js";

loadHome();
// function to wipe existing content
function clearPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}
//select the buttons 1 at a time
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click",() => {
    clearPage();
    loadHome();
})

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click",() => {
    clearPage();
    loadAbout();
})
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click",() => {
    clearPage();
    loadMenu();
})

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click",() => {
    clearPage();
    loadContact();
})
