function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(10, 5)); 

function printGreeting(name) {
    console.log("Hello",name);
}
printGreeting("saranya"); 

const fruits = ["apple", "banana", "strawberry", "blueberry", "dragon fruit"];
console.log(fruits.length);

let numbers = [10, 23, 54, 66, 2, 4];
const filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers); 

let num=[2,4,6,8,10];
let result=num.map(num=>num*2);
console.log(result);

let price=[10,20,30,40,50];
const total=price.reduce((sum,number)=>sum+number,0);
console.log(total);

