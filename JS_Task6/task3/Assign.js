const productsContainer = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');
let count = 0;

async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="add-btn" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart() {
    count++;
    cartCount.innerText = count;
}

getProducts();