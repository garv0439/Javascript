console.log("This is tutorial. no. 10");

let i = 0;
for (i = 0; i < 3; i++) {
    console.log(i);
}

console.log("******************************************************************************");

//you can use 1 from this 3 ways to print arrays

//classical for loop use many years before
let friends = ["rohan", "sanjiv", "dipti", "pooja", "garry"];
for (let index = 0; index < friends.length; index++) {
    console.log("hello  friend, " + friends[index]);
}


console.log("******************************************************************************");

//forEach == modern
friends.forEach(function f(element) {
    console.log("hello friend " + element + ", welcome to javascript");
});

console.log("******************************************************************************");

//for loop == modern
for (element of friends) {
    console.log("hello friend, " + element + " is your name?");
}
