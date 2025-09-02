// const person = {name: "Tanvir", age: "22", city: "Helsinki", info: {occupation: "Student", university: "Metropolia"}};

// const {name, info: {occupation, university}} = person;

// console.log("Name: ", name);
// console.log("occupation: ", occupation);
// console.log("University:", university);


const greetUser = ({name, age}) => {
    console.log(`Hello I am ${name} and my age is ${age}`);
};

greetUser({name: 'BOB', age: "25"});