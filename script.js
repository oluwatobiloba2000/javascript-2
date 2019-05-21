let arrayOfNumbers = [1225 ,777 ,345 ,1675];
const personalDetails = {
    firstName : 'vanessa',
    lastName : 'rogers',
    gender: 'female',
    age : 19,
    salary : 60193
};

console.log("*****************************");
console.log("function that takes in an array of numbers");
let numbers = ()=>{
    return `${arrayOfNumbers[0]} ${arrayOfNumbers[3]}`;

};
console.log(numbers());


console.log("********************************");

console.log("******************************************");
console.log("FUNCTION THAT ACCEPTS AN OBJECT AS A PARAMETER");
let details = ()=>{
        return `your name is ${personalDetails.firstName} ${personalDetails.lastName} , you are a ${personalDetails.gender} , your age is ${personalDetails.age} and your current salary is $${personalDetails.salary}`;
};
console.log(details());
console.log(personalDetails);
console.log("******************************************");

console.log("******************************************");
console.log("FUNCTION THAT TAKES IN NAME AND SCORE");
//FUNCTION THAT TAKES IN NAME AND SCORE
let player = (name , score)=>{ return `Hello , ${name} ,your score is ${score}`};
console.log(player('tobi' , 200));
// console.log(player);
console.log("********************************************");