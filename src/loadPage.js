export function loadPage() {
  const content = document.getElementById("content");

  content.innerHTML = `
  <header>
  <nav>
    <ul class="flex-row">
      <li>Home</li>
      <li>Menu</li>
      <li>About</li>
    </ul>
  </nav>
</header>
<main>
  <h1 class="site-title">Sushido</h1>
  <h2 class="restaurant-description">
    Take a moment to enjoy life and its precious culinary gifts. See how
    the best ingredients and finest art become one on your plate.
  </h2>
  <button class="call-to-action-btn">Order Now</button>
</main>
<footer><p>Copyright © 2024 FabianCode03</p></footer>`;
}
