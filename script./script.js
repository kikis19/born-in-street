const buttons = document.querySelectorAll("button");
const cartSection = document.querySelector("#kosik p");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSection.textContent = cart.length > 0 ? `V košíku je ${cart.length} položek.` : "Košík je prázdný.";
}

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productName = event.target.previousElementSibling.textContent;
        cart.push(productName);
        updateCart();
    });
});

updateCart();
