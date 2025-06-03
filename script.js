function goBack() {
  content.innerHTML = `
    <div id="product-grid" class="grid">
      <div class="card"><div class="image-placeholder"></div><h3>hoodies</h3></div>
      <div class="card"><div class="image-placeholder"></div><h3>tshirt</h3></div>
      <div class="card"><div class="image-placeholder"></div><h3>sweatpants</h3></div>
      <div class="card"><div class="image-placeholder"></div><h3>accessories</h3></div>
    </div>
  `;
}
document.addEventListener("click", function(e) {
  if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
    sidebar.classList.add("hidden");
  }
  if (!cart.contains(e.target) && !cartIcon.contains(e.target)) {
    cart.classList.add("hidden");
  }
});
