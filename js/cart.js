document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");

  loadFromLocalStorage();

  function addToCart(product) {
    const li = document.createElement("li");
    li.innerHTML = `
              <h3>${product.attribute.name}</h3>
              <p>Count: ${product.count}</p>
          `;
    cartItems.appendChild(li);
  }

  function loadFromLocalStorage() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      addToCart(cart)
    }
  }
});

console.log(localStorage.getItem("cart"));
