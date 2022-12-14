// do not use var to assign variables - antiquated

// use const(best to use) or let(not best but ok)

//space between curly brackets is called a block

// ex: function() {

    // this area is called a block
// }

// if you assign let or const inside a block it will only execute code within that block

// good example: function() {
    // let x = 5
    // console.log(x)
// }

// bad example: function() {
    // let x = 5
// }

// console.log(x) -- THIS WILL NOT WORK BECAUSE IT IS OUTSIDE OF BLOCK




in class notes:

/*
    Understanding “let” and “const”
    Arrow functions
    Template literals
    Classes
    Class inheritance
    Destructuring arrays and objects
    Promises
    Async/Await

    Modules
    Fetch
    Array functions
*/

// // Bad
// "use strict";
// var name = "erik"; // 🚫 don't use var, makes your code more error prone


// // Better (favor it)
// const luckyNumber = 777; // assignment
// // luckyNumber = 555; // re-assignment (won't work with const)

// // Better (if you need to do re-assignment only then use let)
// let age = 5; // assignment
// age = 8; // re-assignment



// if (true) {
//     // Block
//     const state = "California";

//     city = "new york";
// }

// console.log("the city", city)

// for(let i = 0; i < 10; i++) {
//     // block
// }

// function jump() {
//     // block
// }

// {
//     // block
//     let x = 5;

//     {
//         console.log(x) // 5
//     }
// }



// function runStatement() {
//     console.log("run statement ");
// }
// runStatement();


// const runExpression = () => {
//     console.log("run expression ");
// }

// runExpression();


const person = {
    name: "erik",
    walk: () => {
        // arrow function has no this context
        console.log(this.name, "is walking")
    },
    flip: function () {
        // function does have a this context
        console.log(this.name, "is flipping")
    }
}

// // console.log(person)

// const dothewalk = person.walk;

// dothewalk();

// person.flip();

// .apply()  or .call()


// const firstName = "erik";
// const lastName = "montes";


// const sentence = firstName + " " + lastName + " is " + (2 * 25) + " years old!";

// // Template literals
// const sentence2 = `${firstName[0]} ${lastName} is ${2 * 25} years old!`

// console.log(sentence)
// console.log(sentence2)


// class Bear {

//     constructor(name, age) {
//         // will run when you create an instance of it

//         this.name = name;
//         this.age = age;
//     }

//     walk() {
//         console.log(`${this.name} Walk`)
//     }

//     climb() {
//         console.log(`${this.name} climb`)
//     }
// }

// class PolarBear extends Bear {
//     constructor(name, age) {
//         super(name, age);


//         console.log("after the Bear's logic")
//     }

//     swim() {

//         console.log(`${this.name} swim`)
//     }
// }

// const yogi = new Bear("Yogi", 55);

// yogi.walk();
// yogi.climb();

// const smokey = new Bear("Smokey", 20);
// smokey.walk();
// smokey.climb();

// const coke = new PolarBear("Coke", 544);
// coke.walk();
// coke.climb();

// Prototypal inheritance (old school of doing classes)
// function Bear(n, a) {
//     this.name = n;
//     this.age = a;
// }

// Bear.prototype.walk = function () {
//     console.log(`${this.name} Walk`)
// }

// Bear.prototype.climb = function () {
//     console.log(`${this.name} climb`)
// }

// const teddy = new Bear("Ted", 23);

// teddy.walk();


// const colors = ["red", "green", "blue"];

// // Destructuring
// const [,favcolor, ...theRestofTheColors] = colors;

// // console.log(favoriteColor)
// console.log(favcolor)
// console.log(theRestofTheColors);

// const person2 = {
//     name: "john",
//     age: 32,
//     city: "NYC"
// };

// const { city: town, age: personAge } = person2;

// console.log(personAge)
// console.log(town)


// 1. Creating the promise
// new Promise() (most time you won't do this)

const returnHome = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // run some code after 2 seconds
            // resolve("heck yes!")
            reject("whooops!")

        }, 2000)
    });
}

// 2. Consuming the promise
    // 1. .then() .catch()
    // 2. async/await

// then / catch chaining
// returnHome().then((msg) => {
//     console.log(`The message is ${msg}`)
// }).catch((sadlfjsdalk) => {
//     console.log("Failed ", sadlfjsdalk)
// });


// async function start() {

//     try {
//         const msg = await returnHome()

//         console.log(msg)

//     } catch (err) {

//         console.log(err)
//     }


//     console.log("All done!")
// }

// start(); // execute



// console.log("Reached end of file");


// Fetch returns a promise, so we just need to consume it
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


//   async function getData() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//         const data = await response.json();

//         console.log(data)
//     } catch (e) {

//         console.log(e)

//     }


//   }


//   getData();





// function square(n) {
//     return n * n;
// }

// function cube(n) {
//     return n * n * n;
// }

// function oddOrEven(n) {

//     if (n % 2 === 0) {
//         return "even"
//     }

//     return "odd";
// }

// console.log(oddOrEven(99))

// const x = 10;

// console.log(square(10))


// const nums = [1, 3, 5, 3, 6, 6, 5];

// console.log(nums);

// const results =  nums.map(oddOrEven);

// console.log(results)