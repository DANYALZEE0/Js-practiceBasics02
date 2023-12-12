// JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
// Singleton

// object literals

// Object.create: used for Singleton

const sybl = Symbol("Key1")

const jsUser = {
    name: "Zeeshan",
    "Full Name": "Zeeshan Patel",
    [sybl] : "Key1",
    age: 18,
    location: "Solapur",
    email: "Zeeshan89@gmail.com",
    islogedin: false,
    lastloginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email); // not good way to print
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[sybl]);
// console.log(typeof jsUser[sybl]);

jsUser.email = "Zeeshan@google.com"
// Object.freeze(jsUser)
jsUser.email = "Zeeshan@facebook.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js usrs");
}
jsUser.greetingwithName = function(){
    console.log(`Hello js usrs, ${this["Full Name"]} `);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingwithName());

