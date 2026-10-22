//global scope 
const campusName="campus event";
function showApp(){
    console.log(campusName);
}
showApp();


if (true) {
    let a = 10;
    var b = 20;

    console.log("Inside if  let a value:", a);
    console.log("Inside if var b value:", b);
}

console.log("outside if var b:", b);
console.log("outside if let a:", a);

console.log(c);
var c= 10;
console.log(c);
console.log(d);
let d=10;
console.log(d);

// closure concept
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter = makeCounter();
counter();
counter();
counter();