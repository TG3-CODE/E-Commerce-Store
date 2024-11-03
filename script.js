const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 40 },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartSummary();
    }
}

function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.innerHTML = ''; // Clear existing cart summary
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name}: $${item.price}`;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.onclick = () => removeFromCart(item.id); 

        itemDiv.appendChild(deleteButton);
        cartSummary.appendChild(itemDiv);
    });
    const totalDiv = document.createElement('div');
    totalDiv.innerText = `Total: $${total}`;
    cartSummary.appendChild(totalDiv);
}
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1); // Remove only the first occurrence of the product
        updateCartSummary();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
