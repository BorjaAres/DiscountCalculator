// Discount Calculation

// Discount Calculation

// Prompt the user to enter the product price
let price = parseFloat(prompt("Enter the product price"));

// Prompt the user to enter the discount percentage
let userDiscount = parseFloat(prompt("Enter the discount percentage"));

const extraDiscount = 0.15; // Extra discount percentage

// Convert the discount percentage to a decimal value
let decimalDiscount = userDiscount / 100;

// Calculate the discount amount in money
let discountAmount = price * decimalDiscount;

// Calculate the total price after applying the discount
let total = price - discountAmount;

// Apply extra discount if the total price is greater than 100
if (total > 100) {
    let extraDiscountAmount = total * extraDiscount;
  let finalPrice = total - extraDiscountAmount;
  document.getElementById('myDiv1').innerHTML = "We have applied an additional 15% discount, so the final price of your purchase is " + finalPrice;
} else {
  document.getElementById('myDiv1').innerHTML = "The price of your purchase is " + total;
}
