// Arithmetic Operators Tasks
// 1. E-commerce Cart Total
let item1 = 500
let item2 = 300
let total = item1 + item2
console.log("Total price is :" + total)
document.getElementById("Result").innerText = "Total prie is : " + total

// 2. Calculate the discounted price when a user applies a 10% coupon.
let orignalPrice = 2000
let discount = (orignalPrice * 10) / 100
let finalPrice = orignalPrice - discount
console.log("The discounted price is:" + finalPrice)
document.getElementById("Discount").innerText = "Discounted price is : " + finalPrice

// 3. Create a program that calculates total bill including tax (18%) for an online store.
let bill = 30000
let tax = (30000 * 18) / 100
let totalBill = bill + tax
console.log("Total Bill is :" + totalBill)
document.getElementById("totalBill").innerText = "Total Bill is : " + totalBill

// 4. Build a BMI calculator for a health website.
let weight = 70; // kg
let height = 1.75; // meters
let bmi = weight / (height * height);
console.log("Your BMI is: " + bmi);
document.getElementById("BMI").innerText = "Your BMI is: " + bmi

//5. Create a monthly salary calculator after deducting tax.
let salary = 50000;
let taxDeduction = 5000;
let netSalary = salary - taxDeduction;
console.log("Remaning Salary is: " + netSalary);
document.getElementById("Salary").innerText = "Remaning Salary is:  " + netSalary

//6. Calculate average rating from 5 user ratings on a product page.
let r1 = 4, r2 = 5, r3 = 3, r4 = 5, r5 = 4;
let average = (r1 + r2 + r3 + r4 + r5) / 5;
console.log("Average Rating: " + average);
document.getElementById("averageRating").innerText = "Average Rating:  " + average

// 7. Create a shopping delivery charge calculator depending on order amount.
let orderAmount = 400;
let deliveryCharge = 50;
let finalAmount = orderAmount + deliveryCharge;
console.log("Total with Delivery: " + finalAmount);
document.getElementById("amount").innerText = "Total with Delivery:  " + finalAmount

// 8. Build a simple interest calculator for a banking website.
let principal = 10000;
let rate = 5; // 5%
let time = 2; // 2 years
let interest = (principal * rate * time) / 100;
console.log("Interest Amount: " + interest);
document.getElementById("interest").innerText = "Interest Amount: " + interest

// 9. Calculate the remaining balance after a user withdraws money.
let balance = 5000;
let withdraw = 1200;
let remaining = balance - withdraw;
console.log("Remaining Balance: " + remaining);
document.getElementById("balance").innerText = "Remaining Balance: " + remaining

// 10. Create a time converter that converts minutes into hours and minutes.
let totalMinutes = 90;
let hours = Math.floor(totalMinutes / 60); // Poore ghante ans aya 2
let mins = totalMinutes % 60; // Bacha hua time 10 bachy 
console.log(hours + " Hours and " + mins + " Minutes"); //2 hours and 10 mins
document.getElementById("converter").innerText = hours + " Hours and " + mins + " Minutes"

// 2. If-Else Statements (Decision Making)

// 1. Create a login system that checks username and password.
let username = "Muskan Amin"
let password = "123"
if (username === "Muskan Amin" && password === "123") {
    console.log("Login Successful!")
    document.getElementById("login-system").innerText = "Login Successful!"
} else {
    console.log("Invalid Credentials.")
    document.getElementById("login-system").innerText = "Invalid Credentials."
}

// 2. Build a website age restriction check (block users under 18).
let age = 21
if (age >= 18) {
    console.log("Access granted")
    document.getElementById("age").innerText = "Access granted"
} else {
    console.log("Access Blocked! You are under 18.")
    document.getElementById("age").innerText = "Access Blocked! You are under 18."
}
// 3. Create a discount system for an online store:
// ○ Order > $100 → 10% discount
// ○ Order > $200 → 20% discount
let order = 300
if (order > 200) {
    order = order - ((order * 20) / 100)
    console.log("20% Discount Applied. Final: " + order)
    document.getElementById("order").innerText = "20% Discount Applied. Final: " + order
} else if (order > 100) {
    order = order - ((order * 10) / 100)
    console.log("10% Discount Applied. Final: " + order)
    document.getElementById("order").innerText = "10% Discount Applied. Final: " + order
} else {
    console.log("No Discount.");
}

// 4. Check if a student gets grade A, B, C, or Fail based on marks.
let marks = 75;

if (marks >= 80) {
    console.log("Grade: A");
    document.getElementById("grade").innerText = "Grade: A"
} else if (marks >= 60) {
    console.log("Grade: B");
    document.getElementById("grade").innerText = "Grade: B"
} else if (marks >= 40) {
    console.log("Grade: C");
    document.getElementById("grade").innerText = "Grade: C"
} else {
    console.log("Result: Fail");
    document.getElementById("grade").innerText = "Result: Fail"
}

// 5. Build a weather advisory system (hot, cold, rainy).
let temp = 15;

if (temp > 35) {
    console.log("It's Hot! Drink more water.");
    document.getElementById("weather").innerText = "It's Hot! Drink more water."
} else if (temp > 20) {
    console.log("Weather is Pleasant.");
    document.getElementById("weather").innerText = "Weather is Pleasant."
} else if (temp < 10) {
    console.log("It's Rainy or Cold! Wear a jacket.");
    document.getElementById("weather").innerText = "It's Rainy or Cold! Wear a jacket."
} else {
    console.log("Normal Weather.");
    document.getElementById("weather").innerText = "Normal Weather."
}
