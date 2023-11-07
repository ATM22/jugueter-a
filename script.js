let products = [];
        let total = 0;
        let customer = {};

        function add(product, price) {
    console.log(product, price);
    
        products.push({ product, price });
    
    total = total + price;
    updateCart();
}


        function pay() {
            const productNames = products.map(item => item.product);
            const customerInfo = `Nombre de Cliente: ${customer.name}\nTeléfono: ${customer.phone}\nNIT: ${customer.nit}`;
            window.alert(`Productos seleccionados:\n${productNames.join(",\n")}\nTotal: Q${total}\n${customerInfo}`);
        }

        function removeProduct(index) {
            const removedProduct = products.splice(index, 1);
            total -= removedProduct[0].price;
            updateCart();
        }

        function updateCart() {
            const cart = document.getElementById("cart");
            while (cart.firstChild) {
                cart.removeChild(cart.firstChild);
            }
            products.forEach((item, index) => {
                const productItem = document.createElement("div");
                productItem.innerText = `${item.product} - Q${item.price}`;
                const removeButton = document.createElement("button");
                removeButton.innerText = "Eliminar";
                removeButton.onclick = () => removeProduct(index);
                productItem.appendChild(removeButton);
                cart.appendChild(productItem);
            });
            document.getElementById("checkout").innerHTML = `Pagar Q${total}`;
        }