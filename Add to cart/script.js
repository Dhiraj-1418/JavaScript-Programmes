
let yourCart = []; 


function addToCart() {
    const cartItems = document.getElementById('cartItems');
    const totalAmt = document.getElementById('totalAmt');
    let total = 0;
    
    cartItems.innerHTML = '';
    yourCart.forEach(product => {
        const li = document.createElement('li');
        li.style.listStyleType="number"
        li.textContent = `${product .name} - $${product .price}`;
        cartItems.appendChild(li);
        total += product .price;
    });
    
    
    totalAmt.textContent = `Total: $${total}`;
}

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        yourCart.push({ name, price });
        addToCart();
    });
});


document.getElementById('checkOut').addEventListener('click', () => {
    if (yourCart.length > 0) {
        alert('Thank you for purchasing!');
        yourCart = []; 
        addToCart(); 
    } else {
        alert('Your yourCart is empty!');
    }
});