//for in loop
let employee = {
    name: "Garv",
    salary: 200000,
    hobby: "Acting"
}

for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}

console.log("******************************************************************************");

//while loop
// let a = 0;
// while(a<4){
//     console.log(`i is less then 4`);     
//     i++                                                do not run this code it hands chrome
// }



// while loop
let a = 0;
while (a < 4) {
    console.log(`${a} is less then 4`);
    a++;
}


//do-while

let b = 1
do {
    console.log(`${b} is less then 4 in do while loop`);
    b++;
}
while (b < 8)