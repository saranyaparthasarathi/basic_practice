const appName="campus event";
function showApp(){
    console.log(appName);
}
showApp();

function reg(){
    const name="maya";
    console.log(name);
}
reg();

const campus="south camus";
function showcampus(){
    const building="library";
    function showbuilding(){
        console.log(campus,building);
    }
    showbuilding();
}
showcampus();

function makegreet(name){
    return function(){
        console.log("hello ,"+name);
    };
}
const mygreet=makegreet("saran");
mygreet();