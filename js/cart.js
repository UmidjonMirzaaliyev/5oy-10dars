let cart = localStorage.getItem("cart");
const cartItem = document.getElementById("cart-items");

cart = JSON.parse(cart);
cart.forEach((product) => {
  cartItem.innerHTML += `
        <div class="cart-item" id="cart-item-template"">
        <img src="${product.attribute.image}" alt="Product Image" class="product-image">
        <div class="product-details">
            <h3 class="product-name">${product.attribute.title}</h3>
            <p class="product-brand">${product.attribute.company}</p>
        </div>
        <div class="product-price">${product.attribute.price}$</div>
    </div>
    `;
});
