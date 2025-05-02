function showPrice(productId) {
    const product = document.getElementById(productId);
    if (product.style.display === 'none') {
        product.style.display = 'block';
    } else {
        product.style.display = 'none';
    }
}
