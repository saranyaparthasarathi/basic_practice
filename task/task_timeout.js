/*console.log("one");
setTimeout(()=>console.log("two"),450);
console.log("three");

console.log("registration received");
setTimeout(()=>console.log("registration confirmed"),60);
console.log("it may take few seconds....");
*/
/*
callstack---line by line execution
*/
console.log("A");
setTimeout(()=>console.log("B"),0);
Promise.resolve().then(()=>console.log("C"));
console.log("D");