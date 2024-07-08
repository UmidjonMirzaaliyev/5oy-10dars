let cart = localStorage.getItem("cart");
const cartItem = document.getElementById("cart-items");

cart = JSON.parse(cart);
cart.forEach((product) => {
  cartItem.innerHTML += `
    <li>
       <img class="product-img" src="${product.attribute.image}" alt="">
        </li>
    <li>
        <h1>${product.attribute.title}</h1>
    </li>
        
    `;
});
