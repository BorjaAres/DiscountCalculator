# Discount Calculation

This is a simple JavaScript program that calculates the final price of a product after applying a discount. It prompts the user to enter the product price and the discount percentage, and then calculates the discounted price accordingly. If the price after the discount goes over $100, an additional 15% discount is applied.

## Usage

1. Go to https://simplediscountcalculator.netlify.app/
2. The program will prompt you to enter the product price. Provide the price as a numeric value.
3. Next, it will prompt you to enter the discount percentage. Enter the percentage as a whole number, without the '%' symbol.
4. The program will calculate the discounted price based on the entered values and display it on the web page. If the discounted price is over $100, an extra 15% discount will be applied.

## Example

```javascript
// Prompt the user to enter the product price
let price = prompt("Enter the product price", 150);

// Prompt the user to enter the discount percentage
let userDiscount = prompt("Enter the discount percentage", "10%");

// ...

```

In the above example, the user is prompted to enter the product price and discount percentage. The program then calculates the discounted price and performs additional discount calculations if the total price is above $100.

## Notes

- Ensure that the JavaScript code is embedded within an HTML file, and there is an HTML element with the id "myDiv1" to display the output.
- Customize the default values in the prompt statements to match your specific use case.
- This code assumes that the user enters valid numeric values for the price and percentage inputs.
- The program uses simple arithmetic operations to calculate the discount, so it does not account for complex discount scenarios.
