var x=10; //global
function test()
{
    var y=20; //functional
}

console.log(x);
console.log("5");

var pop ="hi js";
function rel()
{
    var top ="hello js";
}

//redeclaration is allowed
var g; //undefined
console.log(g);

//problem
var flag= "hey pol";
var t1=4;
if(t1>3)
{
    var flag= "hey tom"; //pol not calling
}
console.log(flag);
//////
//let -block scoped
//can be reintialised
let flag1= "hey pol1";
let t2=4;
if(t2>3)
{
    let flag2= "hey tom1"; //pol not calling
}
console.log(flag1);


const mg = "hey pol" //like final variable
mg="hey";
console.log(mg);

//undefined for var and let but for const it must be initialised




