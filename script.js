function openModal(product) {
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modal-title");
    const modalImages = document.getElementById("modal-images");

    // Example data for each product
    const productData = {
        tshirt1: {
            title: "T-shirt 1",
            images: [
                "images/tshirt1.jpg",
                "https://via.placeholder.com/300x300/0000FF/808080?text=Image+2",
                "https://via.placeholder.com/300x300/00FF00/808080?text=Image+3"
            ]
        },
        hoodie1: {
            title: "Hoodie 1",
            images: [
                "images/hoodie1.jpg",
                "https://via.placeholder.com/300x300/FF0000/FFFFFF?text=Hoodie+Image+2"
            ]
        },
        sweatpants1: {
            title: "Sweatpants 1",
            images: [
                "images/sweatpants1.jpg",
                "https://via.placeholder.com/300x300/FFFF00/808080?text=Sweatpants+Image+2"
            ]
        },
        accessory1: {
            title: "Accessory 1",
            images: [
                "images/accessory1.jpg",
                "https://via.placeholder.com/300x300/000000/FFFFFF?text=Accessory+Image+2"
            ]
        }
    };

    // Set product title
    modalTitle.innerText = productData[product].title;

    // Set images
    modalImages.innerHTML = '';
    productData[product].images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = productData[product].title;
        img.style.width = "100%";
        modalImages.appendChild(img);
    });

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
