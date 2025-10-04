// Sample product data
const products = [
    {
        id: 1,
        name: "Men's T-Shirt",
        price: 499,
        category: "Men",
        image: "https://via.placeholder.com/200x220?text=Men+T-Shirt"
    },
    {
        id: 2,
        name: "Women's Dress",
        price: 899,
        category: "Women",
        image: "https://via.placeholder.com/200x220?text=Women+Dress"
    },
    {
        id: 3,
        name: "Men's Shoes",
        price: 1299,
        category: "Men",
        image: "https://via.placeholder.com/200x220?text=Men+Shoes"
    },
    {
        id: 4,
        name: "Kids Wear",
        price: 599,
        category: "Kids",
        image: "https://via.placeholder.com/200x220?text=Kids+Wear"
    },
    {
        id: 5,
        name: "Bag",
        price: 799,
        category: "Women",
        image: "https://via.placeholder.com/200x220?text=Bag"
    }
];

// DOM Elements
const productList = document.getElementById('product-list');
let cartCount = 0;

// Render products
function renderProducts(filteredProducts = products) {
    productList.innerHTML = ""; // Clear previous products
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Add to cart function
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${product.name} added to cart!`);
}

// Optional: Filter by category (Men, Women, Kids)
function filterProducts(category) {
    if (category === "All") {
        renderProducts();
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Initial render
renderProducts();
