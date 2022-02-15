//The value saved to kelvin will stay constant. Choose the variable type with this in mind.
const kelvin = 293;
//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.Fahrenheit = Celsius * (9/5) + 32 In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
let fahrenheit = celsius * (9 / 5) + 32;
//When you convert from Celsius to Fahrenheit, you often get a decimal number.Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


const myAge = 44;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge -2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears ;

console.log(myAgeInDogYears);

let myName = 'Omer'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);