document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let drink = document.getElementById('drink').value;
    let quantity = document.getElementById('quantity').value;

    let order = {
        name: name,
        email: email,
        drink: drink,
        quantity: quantity
    };

    console.log('Order received:', order);
    alert('Thank you, ' + name + '! Your order has been placed.');

    // Mock saving the order data (requires backend for real-time saving to Excel)
    saveOrderToExcel(order);
});

function saveOrderToExcel(order) {
    // Simulate saving to an Excel file (requires backend functionality)
    console.log('Saving order to Excel:', order);
}
