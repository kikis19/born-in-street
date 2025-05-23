// Skript pro jednoduchou interakci s kategoriemi
const categories = document.querySelectorAll('.category-box');
categories.forEach(category => {
    category.addEventListener('click', () => {
        alert('Našel jsi kategorii: ' + category.id);
    });
});
