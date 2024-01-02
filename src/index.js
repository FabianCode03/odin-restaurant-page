import "./pictures/sushi-restaurant.jpg";
import "./style.css";
import { loadPage } from "./modules/loadPage";
import { loadHome } from "./modules/home";
import { loadMenu } from "./modules/menu";

loadPage();

const callToAction = document.querySelector(".call-to-action-btn");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => loadHome());
menu.addEventListener("click", () => loadMenu());
callToAction.addEventListener("click", () => loadMenu());
