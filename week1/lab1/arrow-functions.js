//  // Regular function
// // function sayHello() {
// //     return "Hello, world!";

// const sayhello = () => { 
//     console.log("hello world");
// };

// sayhello();

// // Regular function
// function double(x) {
//     return x * 2;


// const double = x=>{console.log(x * 2)};
// double(45);


// // Regular function
// function add(x, y) {
//     return x + y;
// }


// const add = (x, y) => { console.log(x + y)};
// add(45, 5);

// Regular function

// const person = {
//     name: "Alice",
//     sayHi: function() {
//         return "Hi, " + this.name + "!";
//     }
// };


// const person = {
//     name: "Alice", 
//     sayhi: () => console.log("Hi" + this.name + "!")
// };
// person.sayhi();


// const doubled = [];
// numbers.forEach(function(num) {
//   doubled.push(num * 2);
// });


// const numbers = [1, 2, 3, 4, 5];
// const doubled = [];
// numbers.forEach(num => doubled.push(num *2));
// console.log(doubled);

// // 1.
// function cube(x) {
//   return x * x * x;
// }

const cube = (x) => {console.log(x * x * x)};



// // 2.
// function fullName(first, last) {
//   return first + " " + last;
// }

const fullname = (first, last) => {console.log(first + " " + last)};



const power = (base, exp) => {
    if (exp === 0 ) {
        return 1 }
        return (base * power(base, exp -1));
};



// // 4.
// function sumCubes(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total = total + cube(numbers[i]);
//   }
//   return total;
// }

