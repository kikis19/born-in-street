// Tady můžeš později přidat funkce pro rozklikávání produktů nebo ukládání položek do košíku.
// Prozatím jen jednoduchý skript pro načítání kategorie.

const categories = document.querySelectorAll('.category-box');
categories.forEach(category => {
    category.addEventListener('click', () => {
        alert('Našel jsi kategorii: ' + category.id);
    });
});
