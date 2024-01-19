let name1 = "garv";
let name2 = "shubham";
let name3= "meet";
let name4 = "harsh";
let greettext = "Good Mourning";// for line number 25

console.log(name1 + " is a good boy.");
console.log(name2 + " is a good boy.");
console.log(name3 + " is a good boy.");
console.log(name4 + " is a good boy.");

console.log("this is javascript.");
//same same but different
//short and sweet style to write greet function

function greet(name1) {
    console.log(name1 + " is a good boy.");
}
greet(name1);
greet(name2);
greet(name3);
greet(name4);

//new


function greet(name1,greettext) {
    console.log(greettext + " " + name1);
    console.log(name1 + " is a good boy.");


}
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);
greet(name4,greettext);


function greet(name1,greettext = "good night") { //good night is a default value
    console.log(greettext + " " + name1);
    console.log(name1 + " is a good boy.");


}
greet(name1); //if we not write greektext it takes default value
greet(name2,greettext);
greet(name3,greettext);
greet(name4,greettext);
