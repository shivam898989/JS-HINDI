//  Primitive

// 7 Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggeedIn = false
 const outsideTemp = null
 let userEmail;

const  id = ('123')
const anotherId = Symbol('123')

// console.log(anotherId === id);

const bigNumber = 32658965236952n

// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shatiman", "naagraaj", "doga"]
let myObj = {
    name: "shivam",
    age: 21
}


const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof heros);

// myFunction => function
//heros => object
//bigNumber => bigint
// score / scoreValue => number
//isLoggedIn => boolean
//outsideTemp => object