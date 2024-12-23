// Array of product details
const products = [
    { title: "Product 1", image: "./image/1.jpg", description: "Description of Product 1" },
    { title: "Product 2", image: "./image/3.jpg", description: "Description of Product 2" },
    { title: "Product 3", image: "./image/2.webp", description: "Description of Product 3" },
    { title: "Product 4", image: "./image/5.jpg", description: "Description of Product 4" },
    { title: "Product 5", image: "./image/16.webp", description: "Description of Product 5" },
    { title: "Product 6", image: "./image/9.jpg", description: "Description of Product 6" },
    { title: "Product 7", image: "./image/10.webp", description: "Description of Product 7" },
    { title: "Product 8", image: "./image/11.webp", description: "Description of Product 8" },
    { title: "Product 9", image: "./image/12.webp", description: "Description of Product 9" },
    { title: "Product 10", image: "./image/13.jpg", description: "Description of Product 10" },
    { title: "Product 11", image: "./image/19.jpg", description: "Description of Product 11" },
    { title: "Product 12", image: "./image/21.jpg", description: "Description of Product 12" },
    { title: "Product 13", image: "./image/17.jpg", description: "Description of Product 13" },
    { title: "Product 14", image: "./image/18.webp", description: "Description of Product 14" }
];


const cardContainer = document.getElementById("card-container");


products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button id="cartbtn">Add to Cart</button>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
});

let count = 0;
const countvalue = document.getElementById('count');
const buttons = document.querySelectorAll('button#cartbtn');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        countvalue.textContent = count;
    });
});
