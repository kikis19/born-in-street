const buttons = document.querySelectorAll("button");
const cartSection = document.querySelector("#cart p");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSection.textContent = cart.length > 0 ? `Your cart has ${cart.length} item(s).` : "Your cart is empty.";
}

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productName = event.target.previousElementSibling.textContent;
        cart.push(productName);
        updateCart();
    });
});

updateCart();

