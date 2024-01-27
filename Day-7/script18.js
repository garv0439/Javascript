// function greet(){
//     console.log("good morning");
// }
// greet();


// arrow functions(shortcuts)

// let greet = ()=>{
//     console.log("good night");
// }
// greet();


//shortcut ka shortcut

let greet = () => console.log("good night");

greet();


// let sum = (a,b)=>{
//     return a+b;
// }
//write sum(34,5) in console


//shortcut
let sum = (a,b)=>a+b;
let half = a => a/2;

// setInterval(() => {
//     console.log("we are inside settimeout")
// }, 3000);


let obj1 ={
    names : ["garv", "rohan","rahul","kartik"],
    speak(){
        this.names.forEach((student)=>{
            console.log("good morning, " + student);
        });
    }
}
obj1.speak();