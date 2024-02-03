const user = {
    username: "garv",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function gk(){
//     let username = "garv"
//     console.log(this.username);
// }

// gk()

// const gk = function () {
//     let username = "garv"
//     console.log(this.username);
// }

const gk =  () => {
    let username = "garv"
    console.log(this);
}


// gk()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "garv"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()