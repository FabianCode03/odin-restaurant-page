import { sushiRecipes } from "./recipes.js";

export function loadMenu() {
  const main = document.querySelector("main");

  main.innerHTML = `
  <div class="menu-display">
    <h1 class="menu-heading">Our finest selection</h1>
    <div class="grid-wrapper"></div>
  </div>`;

  const grid = document.querySelector(".grid-wrapper");

  sushiRecipes.forEach(recipe => {
    const newRecipe = document.createElement("div");
    newRecipe.classList.add("recipe");
    newRecipe.innerHTML = `
    <h1>${recipe.title}</h1>
    <p>${recipe.description}</p>
    <img src="${recipe.link}" alt="${recipe.title}">
    <span class="price">${recipe.price}</span>`;

    grid.appendChild(newRecipe);
  });
}
