let arrayOfNumbers = [122 ,0 ,0 ,1222];
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

}
console.log(numbers());


console.log("********************************")
// let numbers = (num ,num ,num ,num) =>{
//     if (typeof(num) === ('number')){
//         return arrayOfNumbers[$]
//     }
// }
// let firstElement = arrayOfNumbers.map((x)=>x.[0]);
// let lastElement = arrayOfNumbers.map((x)=>x.[3]);
// let Numbers = (num1 ,num2 , num3 , num4)=>{
//     return `${firstElement} ${lastElement}`;

// }
console.log("******************************************");
console.log("FUNCTION THAT ACCEPTS AN OBJECT AS A PARAMETER");
let details = ()=>{
        return `your name is ${personalDetails.firstName} ${personalDetails.lastName} ,
    you are a ${personalDetails.gender} , your age is ${personalDetails.age} and your current salary is $${personalDetails.salary}`;
}
console.log(details());
console.log(personalDetails);
console.log("******************************************");

console.log("******************************************");
console.log("FUNCTION THAT TAKES IN NAME AND SCORE");
//FUNCTION THAT TAKES IN NAME AND SCORE
let player = (name , score)=>{
   if(typeof(name) === 'string' && typeof(score) === 'number'){
       return `Hello , ${name} ,your score is ${score}`;
   }else{
       return `please input your name and score`;
   }

}
console.log(player('tobi' , 200));
// console.log(player);
console.log("********************************************");



// console.log(arrayOfNumbers);
// console.log(numbers(12 , 34 , 77 , 837));