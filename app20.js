var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
var prices = [2500, 1200, 22000, 800, 3500];

// Display all products
console.log("===== SHOPPING CART =====");

for (var i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i] + " - Rs. " + prices[i]);
}

// Take user input
var productNumber = Number(prompt("Enter Product Number (1-5):"));
var quantity = Number(prompt("Enter Quantity:"));

// Validate input
if (
    Number.isInteger(productNumber) &&
    productNumber >= 1 &&
    productNumber <= products.length &&
    Number.isInteger(quantity) &&
    quantity > 0
) {

    // Get selected product details
    var index = productNumber - 1;

    var productName = products[index];
    var unitPrice = prices[index];

    // Calculate subtotal
    var subtotal = unitPrice * quantity;

    // Calculate discount
    var discount = 0;

    if (subtotal >= 5000) {
        discount = subtotal * 0.10;
    }

    // Calculate final bill
    var finalBill = subtotal - discount;

    // Display final bill
    console.log("===== FINAL BILL =====");
    console.log("Product:", productName);
    console.log("Unit Price: Rs.", unitPrice);
    console.log("Quantity:", quantity);
    console.log("Subtotal: Rs.", subtotal);
    console.log("Discount: Rs.", discount);
    console.log("Final Bill: Rs.", finalBill);

}
else {
    console.log("Invalid Product Number or Quantity!");
}