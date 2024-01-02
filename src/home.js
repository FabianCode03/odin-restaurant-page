import { loadMenu } from "./menu";

export function loadHome() {
  const main = document.querySelector("main");

  main.innerHTML = `
  <h1 class="site-title">Sushido</h1>
  <h2 class="restaurant-description">
    Take a moment to enjoy life and its precious culinary gifts. See how
    the best ingredients and finest art become one on your plate.
  </h2>
  <button class="call-to-action-btn">Order Now</button>`;
  const callToAction = document.querySelector(".call-to-action-btn");

  callToAction.addEventListener("click", () => loadMenu());
}
