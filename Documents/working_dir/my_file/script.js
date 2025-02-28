

let retun = document.querySelector('.wellcometomysite')
// let product = 'Artichoke';
// let price = 3.99;
// wellcometomysite = (price)
// // wellcometomysite = (product)
// console.log(price)
// console.log(product)
// wellcometomysite.innerHTML = price;
// wellcometomysite.innerHTML = product;
// alert(wellcometomysite)
// alert(wellcometomysite)

// let array ={ 
//     name: 'toyota',
//     price: 3.99,
//   tags: ['vegetable', 'organic', 'healthy']
// }
// wellcometomysite = (array)
// console.log(array);
// let propertyCount = Object.keys(array).length;
// wellcometomysite.innerHTML = `The object has ${propertyCount} properties.`;


// let carObj ={
//   nameOfcar : 'Mercedes Benz',
//   color : 'black',
//   brand : 'Lx 3450',
//   price : 50000000,
//   year : '2019',
// }

// retun[6].innerHTML = 'i drive a' + " " + " " +  carObj.color + " " + " " + " " + carObj.nameOfcar + " " + ' worth' + " " + " " + carObj.price + " "
// + 'in the' + " " + carObj.year;
// retun[6].style.color = 'red'
// console.log(carObj)


//  let arr = ['Manful', 'computer', 'Institute', 'Uyo', 5000, true, false];
//    retun[4].innerHTML =  typeof arr[5];
// Math.random();



// console.log('hello we just start or js')

// if(1 + 1 == 3) {
//     console.log("MATH STILL WORK")
// }
// let random = Math.random();
// if(random < 0.5) {
//     console.log("YOU NUMBER IS LESS THAN 0.5!!!")
//     console.log(random);
// }

// if(random >= 0.5) {
//     console.log("YOU NUMBER IS greater THAN 0.5!!!")
//     console.log(random);
// }

// if(random <= 0.5) {
//     console.log("YOU NUMBER IS greater THAN 0.5!!!")
//     console.log(random);
// }

// const dayOfWeek = prompt ('ENTER A DAY').toLowerCase();
// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS")

// }else if (dayOfWeek === 'saturday') {
//     console.log("yah I LOVE SATURDAY")
// }else if (dayOfWeek === 'friday') {
//     console.log("yah I LOVE FRIDAYS")
// }else {
//     console.log("mah")
// }



const age = 3;
if (age < 5) {
    console.log("you get it free")

}else if (age < 10) {
    console.log("you pay ur fees")
}else if (age < 65) {
    console.log("you are and adult. u must pay $50 ")
}




// Here’s the solution using a function with conditional statements:


// function trafficLight() {
    // Your code goes here
//     let phrase = 'stop'
//     if (phrase === 'stop') {
//         console.log('red');
//     } else if (phrase === 'slow') {
//         console.log('yellow');
//     } else if (phrase === 'go') {
//         console.log('green');
//     }
//     // End of your code
// // }


// let password = prompt ('please enter a new passord')
// if (password.length >= 6){
//     console.log("LONG ENOUGH PASSWORD!")
// }else {
//     console.log("PASSWORD TO SHORT! MUST BE 6+ CHARACTERS")
// }

// if (password.indexOf(' ') === -1){
//     console.log("GOD JOB! NO SPACE")
// }else {
//     console.log("passowrd connot contain spaces")
// }

// const userInput = prompt("ENTER SOMETHING");
// if (userInput){
//     console.log("TRUTHY")
// }else {
//     console.log("FALSY!")
// }

// if (0) {
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY")
// }
// if (' ') {
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY")
// }

// const passords = prompt("enter ur psw");
// if (passords.length >= 6 && passords.indexOf(' ') === -1){
//     console.log("vald password!")
// }else{
//     console.log("INCORRECT FORMAT FOR PSW")
// }

// const ages = 100;
// if (ages < 5 || ages >= 65) {
//     console.log("Free");
// }else if (ages < 65) {
//     console.log("$10")
// }else if (ages < 65) {
//     console.log("$20")
// }

// const ag = 100;
// if (ag >= 0 && ag < 5 || ag >= 65) {
//     console.log("Free");
// }else if (ag < 65) {
//     console.log("$10")
// }else if (ag < 65) {
//     console.log("$20")
// }

// const day = 5;
// if (day === 1) {
//     console.log("MONDAY")
// }
// else if (day === 2) {
//     console.log("TUESDAY")
// }
// else if (day === 3) {
//     console.log("WENESDAY")
// }
// else if (day === 5) {
//     console.log("THURSDAY")
// }
// else if (day === 5) {
//     console.log("FRIDAY")
// }
// else {
//     console.log("I DONT KNOW THAT!")
// }

// const days = 51;
// switch (days) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY")
//         break;

//     case 3:
//         console.log("WENESDAY")
//         break;

//     case 4:
//         console.log("THURSDAY")
//         break;

//     case 5:
//         console.log("FRIDAY");
//         break;
//         default:
//         console.log("I DONT KNOW THAT!")




// }


const person = {
    firstName:'mick',
    lastName: 'jagger',
    price: 3000,
    list: true,
    item: 'care',
}
console.log(person)
console.log(person.firstName);
console.log(person.lastName);
console.log(person.price);
console.log(person.list);
console.log(person.item);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
console.log(restaurant)
console.log(fullAddress)

const comments = [
    {userName: 'tammy', txt: 'lolololol', votes:9},
    {userName: 'firstBoi', text: 'glub glub', votest: 12387, price1: 288}
]
console.log(comments [0].userName)
console.log(comments [0])
console.log(comments [1].text)
console.log(comments [1].price1, 'votest:', comments[1].votest)
console.log(comments [1].text, 'votest:', comments[1].votest, 'userName:', comments[1].userName)
console.log(comments [1])
console.log(comments)

// loop start Here 
// for loop
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
for (let i = 1; i <= 20; i++){
    console.log(i);
}
// for (let i = 3; i <= 10; i++){
//     console.log(i);
// }
// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }
for (let num = 1; num <= 10; num += 1){
    // console.log('m in the loop body)
    console.log(num)
}



for (let i = 100; i >= 0; i -= 10){
    console.log(i);
}

for (let i = 25; i >= 0; i -= 5){
    console.log(i);

}
let animals = [
    "location",
    "development",
    "oyo",
    "length",
    "locationbar",
    "log"
]
for (let i = 0; i < animals.length;  i++){
    console.log(i, animals[i])
}

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);

    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`);
        
    }
}

const seatingChat = [
    ['kriten', 'Erik', 'Namita' ],
    ['geoffrey', 'juanita', 'antonio', 'kevin' ],
    ['yuma', 'Sakura', 'jack', 'erika' ],
]

for (let i = 0; i < seatingChat.length;  i++){
    const row = seatingChat[i];
    console.log(`ROw #${i + 1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row [j])
    }
}
// for loop end here 
// while loop start her
// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }
// // Guessing game
// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code...");
// while (guess !== SECRET){
//     guess = prompt("enter the secret code...")
// }
// console.log('CONGRATS YOU GOT THE SECRET!!!')

// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === "stop copying me") break;
// }
//  console.log("OK YOU WIN")




//  const maximum = parseInt(prompt("Enter the maimum number"));
//  while (!maximum){
//     maximum = parseInt(prompt("Enter a valiad number"));

//  }

//  const targetNum = Math.floor(Math.random() * maximum) +1;
//  let guess1 = parseInt(prompt("Enter your first guses"));
//  let attempts =1

//  while(parseInt (guess1) !== targetNum){
//     if (guess1 === 'q') break;
//     attempts++;
//     if (guess1 > targetNum){
//         guess1 =  prompt("Too hiegh! Enter a new guess:");
//     }else{
//         guess1 = prompt("To low! Enter a new guess");
//     }
//  }
//  console.log(`You got it! It took you ${attempts} guess`)


document.addEventListener("DOMContentLoaded", function () {
    // Selecting form elements
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");
    const correctUsername = "admin";
    const correctPassword = "1234";


    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simulated credentials (replace with real authentication)
        // const correctUsername = "admin";
        // const correctPassword = "1234";

        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else if (username === correctUsername && password === correctPassword) {
            alert("Login successful!");
            // window.location.href = "dashboard.html"; // Redirect to another page
        } else {
            alert("Incorrect username or password. Try again!");
        }
    });
});


const job = ['cring', 'books', 'chickens', 'funny', 'pics']
for (let i = 0; i < job.length; i++){
    console.log(`visit reddit.com/r/${job[1]}`)
}
for (let sub of job) {
    console.log(sub)
}

let testScore ={
    cring: 89,
    marlon: 89,
    cring: 75,
    cring: 85,
    cring: 35,
    cring: 36
}
for (let person in testScore ) {
    console.log(`${person} scored ${testScore[person]}`)
}

let total = 0;
let scores = Object.values(testScore);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)



// quit app
// let input = prompt("what would u like to do?")
// const todos = ['collect chichen eggs', 'clean litter box']
// while(input !== 'quit' && input !== 'q'){
//     // while input is not equal to string 
//     if (input === 'list'){
//         console.log('**************************')
//         for (let i = 0; i < todos.length; i++) {
//                 console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('**************************')
//     }else if (input === 'new'){
//         const newTodo = prompt('Ok, what is the new todo')
//         todos.push(newTodo);
//         // todos.push(newTodo); add
       
//         console.log(`${newTodo} added to the list`)
//     }else if (input === 'delete') {
//         const index = parseInt(prompt('ok, enter and index to delete:'));
//         if (!Number.isNaN(index) && index >= 0 &&index < todos.length){
//             const deleted = todos.splice(index, 1);
//             // splice remove
//             console.log(`ok, delete ${deleted}[0]`)
//         }else{
//             console.log('UNKOWN INDEX')
//         }
//     }
// }
// console.log("OK QUIT THE APP")
// oponsourceproject@gmail.com


// before u start a function u have to first define befor u run it
// we function name and then keep space then the function name perentcassess and the colebraces and then put ur function inside
// function reusable procedures
// 1 function allow us to write reusable, modulae code 
// 2 we define a 'chunk' of code that we can then execute at a tater point
// 3 we use to them ALL THE TIME 
// A function in JavaScript is a block of code that performs a specific task when called (or invoked).
//  Functions allow you to reuse code and keep your programs organized.
//  ✅ Why Use Functions?
//  Avoid Repeating Code → Write once, use many times.
//  Make Code More Organized → Easier to understand & debug.
//  Improve Maintainability → Change the function, and it updates everywhere it's used.
//  Functions with Parameters (Inputs)
//  Parameters allow functions to receive values (e.g., "Alice", "Bob").
// ${name} inserts the value into the message.
//  Functions with Return Values
//  Arrow Function (Shorter Syntax)
// No function keyword needed.
// Works like a normal function, but shorter.
// 🔹 What is an Argument in JavaScript Functions?
// An argument in JavaScript is the actual value that you pass to a function when calling (executing) it.
//  Arguments are used to provide input to functions so they can perform operations with those values.



function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("ME")
}
// singSong()
// function greet(firstName, lastName) {
//     console.log(`hey there, ${firstName}! ${lastName[0]}.`)
    
// }
// greet()

function Repeat(str, numtimes){
    let result = '';
    for (let i = 0; i < numtimes; i++){
        result += str;
    }
        // console.log(result);
        return result;
}
        console.log(Repeat("hi!", 4));

        
function Repeat(str, numtimes){
    let result = '';
    for (let i = 0; i < numtimes; i++){
        result += str;
    }
        console.log(result);
    
}
        // console.log(Repeat("hi!", 4));
// return function
function add(x, y) {
    let sum = x + y;
    return sum;
    
}
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false
    }
    let sum = x + y;
    return sum;
    
}
function multiply(a, b) {
    return a * b;  // Return the product
}

// Example calls
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(9, 9)); // Output: 81
console.log(multiply(4, 5)); // Output: 20

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    return temperature >= 75;
}

// Example calls
console.log(isShortsWeather(80)); // Output: true
console.log(isShortsWeather(48)); // Output: false
console.log(isShortsWeather(75)); // Output: true
function lastElement(arr) {
    if (arr.length === 0) {
        return null;  // Return null if array is empty
    }
    return arr[arr.length - 1];  // Return last element
}

// Example calls
console.log(lastElement([3, 5, 7])); // Output: 7
console.log(lastElement([1])); // Output: 1
console.log(lastElement([])); // Output: null

// function capitalize(str) {
//     if (str.length === 0) {
//         return "";  // Return an empty string if input is empty
//     }
//     return str[0].toUpperCase() + str.slice(1);  // Capitalize first letter and concatenate the rest
// }

// // Example calls
// console.log(capitalize('eggplant')); // Output: "Eggplant"
// console.log(capitalize('pamplemousse')); // Output: "Pamplemousse"
// console.log(capitalize('squid')); // Output: "Squid"
// console.log(capitalize('')); // Output: ""


function sumArray(arr) {
    let total = 0;  // Initialize total as 0
    for (let num of arr) {  // Loop through each number in array
        total += num;  // Add each number to total
    }
    return total;  // Return the final sum
}

// Example calls
console.log(sumArray([1, 2, 3])); // Output: 6
console.log(sumArray([2, 2, 2, 2])); // Output: 8
console.log(sumArray([50, 50, 1])); // Output: 101
console.log(sumArray([])); // Output: 0

function returnDay(num) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (num < 1 || num > 7) {
        return null;  // Return null if number is out of range
    }
    
    return days[num - 1];  // Adjust for zero-based indexing
}

// Example calls
console.log(returnDay(1)); // Output: "Monday"
console.log(returnDay(7)); // Output: "Sunday"
console.log(returnDay(4)); // Output: "Thursday"
console.log(returnDay(0)); // Output: null
console.log(returnDay(8)); // Output: null

let bird = 'Scarlet macaw'
function birds() {
    let bird = 'great blue HEron';
    console.log(bird);

}
birds()

const adds = function (x, y) {
    return x + y;
    // console.log(adds)
}
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5, 15)); // Output: A random number between 5 and 15

const square = {
    area: function(side) {
        return side * side;  // side^2
    },
    perimeter: function(side) {
        return side * 4;  // 4 * side
    }
};

// Example calls
console.log(square.area(10));      // Output: 100
console.log(square.perimeter(10)); // Output: 40
console.log(square.area(5));       // Output: 25
console.log(square.perimeter(5));  // Output: 20

const personMe = {
    name: "Alice",
    color: "grey",
    breed: "scottish fold",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
personMe.greet(); // Output: Hello, my name is Alice


const personM = {
    name: "Alice",
    color: "grey",
    breed: "scottish fold",
    greet: function() {
        console.log(`Hello, my name is ${this.name}. I am a ${this.color} ${this.breed}.`);

    }
};


personM.greet(); // Output: Hello, my name is Alice

const personMs = {
    name: "Alice",
    color: "grey",
    breed: "Scottish Fold",
    age: 3,
    favoriteFood: "salmon",
    meow() {
        console.log(`Hello, my name is ${this.name}. I am a ${this.color} ${this.breed}. I am ${this.age} years old and I love ${this.favoriteFood}.`);
    }
};


personMs.meow(); // Output: Hello, my name is Alice


const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;  // Increment eggCount
        return "EGG";        // Return "EGG"
    }
};

// Testing the object
console.log(hen.name);        // Output: "Helen"
console.log(hen.eggCount);    // Output: 0
console.log(hen.layAnEgg());  // Output: "EGG"
console.log(hen.layAnEgg());  // Output: "EGG"
console.log(hen.eggCount);    // Output: 2

// try catch
try{
    hello.toUpperCase()
} catch {
    console.log("ERROR !!!")
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'web', 'hello']
function print(element) {
    console.log(element)
}
numbers.forEach(print)

    numbers.forEach (function (el) {
    console.log(el)
})

// to print even num 
numbers .forEach(function (el){
    if (el % 2 === 0) {
        console.log(el)
    }
})

// odd
numbers .forEach(function (el){
    if (el % 3 === 0) {
        console.log(el)
    }
})

const movies = [
    {
        title: 'education',
        score: 99
    },

    {
        title: 'web',
        score: 69
    },

    {
        title: 'developer',
        score: 109
    },
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score} /100`)
})

const now = [
    {
        title: 'education',
        score: 99
    },

    {
        title: 'web',
        score: 69
    },

    {
        title: 'developer',
        score: 109
    },
]
 const titles = now.map(function (move) {
    return move.title.toUpperCase();
 })

const numbring = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'web', 'hello']
const double = numbring.map(function (nums) {
    return nums * 2;
})

// arrow function
const adding = (x, y) => {
    return x + y;
}

const squares = (x) => {
    return x * x;
}

// arrow function wrapup

const noNum = [
    {
        title: 'education',
        score: 99
    },

    {
        title: 'web',
        score: 69
    },

    {
        title: 'developer',
        score: 109
    },
]

const newmovie = noNum.map(movein => (
    `${movein.title} - ${movein.score / 10}`
))


// setTimeout
console.log('where are u')
setTimeout (() => {
    console.log("hello are u still the ....................?")
}, 10000)

console.log("good bye........!")

setInterval
setInterval (() => {
    console.log(Math.random())
}, 6000)

const id = setInterval (() => {
    console.log(Math.random())
}, 6000)

clearInterval(id)


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
items.filter(n => {
    return n < 10
})


const fine = [
    {
        title: 'education',
        score: 99
    },

    {
        title: 'web',
        score: 69
    },

    {
        title: 'developer',
        score: 109
    },

    {
        title: 'developer',
        score: 109
    },
    
]
const goodmovie = fine.filter(m => m.year > 80)
const badmovie = fine.filter(m => m.year > 70)
const recentmovie = fine.filter(m => m.year > 2000)


// Reduce 
const prices = [9.99, 1.50, 67.89, 49.99, 30.50];

let totals = 0;
for (let price12 of prices) {
    totals += price12
}
console.log(totals)

const total1 = prices.reduce((total1, prices) => {
    return total + prices
})

// ARROW FUNCTION 
const people = {
    firstName: 'joy',
    lastName: 'ask him the question',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // you i want to call this function after 3 mitune this is how it work using setTimeout 
        shoutName: function () {
            setTimeout( () => {
                console.log(this);
                console.log(this.fullName())
            }, 30000)
        }
};
// firstName: 'joy'
// lastName: 'ask him the question'
// fullName(): A method that returns the full name as a string.
// shoutName(): A method that uses setTimeout to call fullName() after 300 milliseconds.
people.shoutName();


// DEFULT PERAMITERS

// Math.min and Math.max
const nums = [12, 34, 12, 45, 86, 8479200200];
const maxNum = Math.max(...nums);
console.log(maxNum); // Output: 8479200200


const nums1 = [12, 34, 12, 45, 86, 8479200200];
const maxNums = Math.min(...nums1);
console.log(maxNums); // Output: 8479200200

// spread 
const cats = [ 'blue', 'scout', 'rocket'];
const dogs = ['Rusty', 'tech'];
const allpets = [...cats, ...dogs];
console.log(allpets)

const datafromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    username: 'peace'
}
const newUser = { ...datafromForm, id: 2345, isadmin: false}
console.log(newUser)

// desturturing array 
// copping from array 
const scoreS = [9282829, 7468239, 8727483, 48201847, 3749399474, 88903857656]
const highScore = scoreS[0]
const secondHighScore = scoreS[1]
const totalScore = [gold, silver, bronze, ...everoneelse] = scoreS
console.log(totalScore);

const user = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    firstName: 'peace',
    lastName: 'milk',
    born: 1930,
    died: 19780,
    bio: 'harvey bernard milk was an american politicain and the first openl',
    city: 'san francisco',
    state: 'california'
}
const userNames = {email, firstName, lastName, city, bio} = user;
// const {email, firstName, lastName, city, bio} = user;
console.log(firstName)

console.log(userNames)
const {born: birthYear, died: deathYear } = user;
console.log(birthYear)

const user2 = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    firstName: 'peace',
    lastName: 'milk'
};
// const = {email,  password, died = 'N/A'} = user2;
// console.log{died};

// let button = document.querySelector('.button');
// button.addEventListener('click', function (){
//     document.body.style.backgroundColor = 'olive';
// })




const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winingSlected = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winingScore) {
      isGameOver = true;
      // Optionally, add winner/loser classes:
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function() {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winingScore) {
      isGameOver = true;
      // Optionally, add winner/loser classes:
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
      p1Button.disabled = true;
      p2Button.disabled = true;
      
    }
    p2Display.textContent = p2Score;
  }
});

winingSlected.addEventListener('change', function() {
  winingScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
  p1Button.disabled = false;
  p2Button.disabled = false;

}



const videoList = [
    "loading/Tennis1.mp4",
    "loading/Tennis2.mp4",
    "loading/Tennis3.mp4"
];

let currentIndex = 0;
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const nextBtn = document.getElementById("next-btn");

// ✅ Play next video when clicking "Next" button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % videoList.length; 
    videoSource.src = videoList[currentIndex];
    videoPlayer.load(); 

    // ✅ Change Button Style
    nextBtn.style.color = "red";
    nextBtn.style.backgroundColor = "white";
    nextBtn.style.borderRadius = "15px";
    nextBtn.style.width = "5cm";  

    console.log("Playing:", videoList[currentIndex]);

    // ✅ Wait for video to load before playing
    videoPlayer.onloadeddata = () => {
        videoPlayer.play();
    };
});

// ✅ Add Hover Effect
nextBtn.onmouseover = () => {
    nextBtn.style.color = "pink";
};
nextBtn.onmouseout = () => {
    nextBtn.style.color = "red";
};
