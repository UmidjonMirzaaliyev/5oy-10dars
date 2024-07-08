import { getDate, createDateils, getDatestorage, createCard } from "./functions.js";
const dateils = document.getElementById('dateils');

document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    let id = url.split('id=')[1];
    
    if (!id) {
        window.location.assign('http://127.0.0.1:5500/index.html');
        return;
    }

    getDate(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then(data => {
            if (data.data.id) {
                const card = createDateils(data.data);
                dateils.innerHTML = card;

                const form = document.querySelector('form');
                const button = document.querySelector('button');
                const select = document.querySelector('select');

                const product = {
                    id: data.data.id,
                    time: Date.now(),
                    count: select ? select.value : 1,
                    attribute: data.data.attributes,
                };

                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                });

                button.addEventListener("click", function() {
                    saveToLocalStorage(product);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });

    function saveToLocalStorage(product) {
        let cart = localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
        } else {
            cart = [];
        }
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});
