// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Garv",
    "full name": "Garv Kadia",
    [mySym]: "mykey1",
    age: 20,
    location: "jivraj park",
    email: "garv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "garv@chatgpt.com"
// Object.freeze(JsUser)                 //freese object and value in function can not change
JsUser.email = "garv@microsoft.com"
// console.log(JsUser);                  //output not print because of freeze

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello javascript user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());