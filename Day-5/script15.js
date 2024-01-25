console.log('this is tutorial.');

// setTimeout --> allows us to run the function once after the interval  of time.
// clearTimeout --> allows us to run the function repeatedly after the interval  of time.


// function greet(){
//     console.log("good night");
// }
// setTimeout(greet , 2000); //2000 miniseconda = 2 sec



// function greet(name){
//     console.log("hello good morning " + name);
// }
// setTimeout(greet , 5000 , "garv"); //5000 miniseconda = 5 sec


function greet(name, byetext) {
    console.log("hello good morning " + name + " " + byetext);
}
setTimeout(greet, 5000, "garv", "take care");

// timeOut = setTimeout(greet, 7000, "Harry", "don't Care");
// console.log(timeOut);

// clearTimeout(timeOut);
