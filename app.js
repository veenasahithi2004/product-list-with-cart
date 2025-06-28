const products = [
    { id: 1, name: "waffle With Berries", price: 650, img: "i1.png" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", price: 700, img: "i2.png" },
    { id: 3, name: "Macron Mix Of Five", price: 820, img: "i3.png" },
    { id: 4, name: "Salted Caramel Brownie", price: 550, img: "i4.png" },
    { id: 5, name: "Classic Tiramisu", price: 550, img: "i5.png" },
    { id: 6, name: "Pistachio Baklavaa", price: 400, img: "i6.png" },
    { id: 7, name: "Lemon Meringue Pie", price: 510, img: "i7.png" },
    { id: 8, name: "Red Velvet Cake", price: 450, img: "i8.png" },
    { id: 9, name: "Vanilla Panna Cotta", price: 650, img: "i9.png" },

];


const productList = document.getElementById('productList');
const cartList = document.getElementById('cartList');
const totalPriceElement = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

let cart = [];


function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}/-</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    const e = cart.find(item => item.id === productId);

    if (e) {
        e.quan += 1;
    } else {
        cart.push({ ...product, quan: 1 });
    }

    displayCart();
}

function displayCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `     
            ${item.name} (x${item.quan}) = ${item.price * item.quan}/-
            <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartList.appendChild(li);
        total += item.price * item.quan;
    });

    totalPriceElement.innerText = `Total: ${total}/-`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId); 
    displayCart();
}

checkoutBtn.addEventListener('click', () => {

    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Reset complete!');
        cart = []; 
        displayCart();
    }                                   
});

conform.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('order confirmed!');
        displayCart();
    }
});

displayProducts();
displayCart();
