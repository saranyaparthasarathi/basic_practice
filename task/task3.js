let book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500
};
console.log(book);
book.price = 600;
console.log("Updated Price:", book.price);

let user = {
    name: "Saranya",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
console.log(user.address.city);

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 1500 }
];
products.forEach(function(product) {
    console.log(product.name);
});

let student = {
    name: "Saranya",
    age: 21,
    department: "CSBS"
};
let { name, age } = student;
console.log(name);
console.log(age);

let numbers = [10, 20, 30];
let copy = [...numbers];
let moreNumbers = [40, 50];
let combined = [...numbers, ...moreNumbers];
console.log("Copied Array:", copy);
console.log("Combined Array:", combined);

function add(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));

let user1 = {
    name: "saranya",
    address: {
        city: "Chennai"
    }
};
let user2 = {
    name: "saran"
};
console.log(user1.address?.city ?? "City not available");
console.log(user2.address?.city ?? "City not available");