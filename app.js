/*Function #1: Array Slice
Function #1: Array Slice
Take an example array. We will be using the below array for reference.

const foods = [pizza, burger, fingerChips, donuts, springRoll];

Create a new array named as modifiedFood and also create a slice() method.The slice() method should return the selected elements in an array, as a new array object. This method starts slicing the array from the given start argument and ends the slicing operation one element before the given second argument.

Expected output: [burger, fingerShips, donuts]*/
console.log("Function 1");
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);
/*Function #2: Array Splice
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Take an example array. Create a new array named as modifiedFood and use splice() to get the below expected output. Elements are added to the original array.

const foods = [pizza, burger, fingerShips, donuts, springRoll];

Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
*/
console.log("Function 2");
modifiedFood2 = [];
const foods2 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods2.splice(2, 1, "noodles", "icecream ", "fingerShips"); //2 is position and 1 means deleting 1 element 
modifiedFood2 = foods2;
console.log(modifiedFood2);


//Filter
console.log("Function 3");
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    let filtered = numberArray.filter(i => {
        if (i % 2 == 0) //Condition for even no
            return i;
    });
    console.log(`Even number ${filtered}`);
}
isEven(numberArray);
//Function #4: Reject
console.log("Function 4");

function nonPrime(numberArray) {
    let filtered = numberArray.filter(no => {
        for (let i = 2; i <= Math.sqrt(no); i++) {
            if (no % 2 === 0) return true; //Here only even values are getting stored
        }
        return false;
    });
    console.log(`Non Prime number ${filtered}`);
}
nonPrime(numberArray);

//Lambda
console.log("Function 5");

function isEven(numberArray) {
    let filtered = numberArray.filter(i => i % 2 == 0); //Reduced method
    console.log(`Even number ${filtered}`);
}
isEven(numberArray)
//Map
console.log("Function 6");
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    let newarray = myArray.map(i => i * i);
    console.log(newarray);
}
findSquareOfNumbers(myArray);

//Reduce
console.log("Function 7");

function multiply(myArray) {
    let reducer = myArray.reduce((acc, item) => acc * item, 1); //1 is default value of acc
    console.log(reducer);
}
multiply(myArray);