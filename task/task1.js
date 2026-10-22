function greet(){
    console.log("haiiiiii");
}
greet();
function greet1(name){
    console.log("hii ",name);
}
greet1("saranya");
function add(a,b){
    return a+b;
}
const result=add(4,6);
console.log(result);
const square=n=>n*n;
console.log(square(5));






let day="sunday";
switch(day){
    case "saturday":
        console.log("weekend");
        break;
    case "sunday"    :
        console.log("weekend");
        break;
    default:
        console.log("weekdays")    ;
}
console.log("task 1-----");
console.log("Name: saranya p");
console.log("Course:csbs");
console.log("number:42")
console.log("task 2----------");
let event_name="tech_fest";
let ticket_price=100;
let seat_left=12;
console.log("event name : ",event_name);
console.log("ticket price :",ticket_price);
console.log("seat left :",seat_left);
console.log("task 3--------");
let t1=29;
let t2=89 ;
let t3=76;
let sum=t1+t2+t3;
console.log("sum of ticket price",sum);
if(sum<500){
    console.log("total price doesn't exceed 500");
}
else{
    console.log("total price exceed 500");
}
console.log("task 4-----");
let num=726;
if(num>0){
    console.log("positive");
}
else if(num<0){
    console.log("negative");
}
else{
    console.log("zero");
}
console.log("task 5-------");
let n=10;
for(let i=2;i<=n;i++){
    if(i%2==0){
    console.log(i);
    }
}
