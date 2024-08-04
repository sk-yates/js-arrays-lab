/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

//Current print: []

//-----------------------------------------------------------------------------

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push("pizza", "cheeseburger");

console.log('Exercise 2 result:', foods);

//Current print: [ 'pizza', 'cheeseburger' ]

//-----------------------------------------------------------------------------

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift("taco");

console.log('Exercise 3 result:', foods);

//Current print: [ 'taco', 'pizza', 'cheeseburger' ]

//-----------------------------------------------------------------------------

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = foods.slice(1, 2);

console.log('Exercise 4 result:', favFood);

//Current print (foods): [ 'taco', 'pizza', 'cheeseburger' ]
//Current print (favFood):  [ 'pizza' ] 

//-----------------------------------------------------------------------------

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, "tofu");

console.log('Exercise 5 result:', foods);

//Current print (foods): [ 'taco', 'pizza', 'tofu', 'cheeseburger' ]

//-----------------------------------------------------------------------------

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, "sushi", "cupcake");

console.log('Exercise 6 result:', foods);

//Current print (foods): [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]

//-----------------------------------------------------------------------------

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

let yummy = foods.slice(1, 3);

console.log('Exercise 7 result:', yummy);

//Current print (foods): [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]
//Current print (yummy): [ 'sushi', 'cupcake' ]

//-----------------------------------------------------------------------------

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

let soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 result:', soyIdx);


//Current print (foods): [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]
//Current print (soyIdx): 3

//-----------------------------------------------------------------------------

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

let allFoods = foods.join(" -> ");

console.log('Exercise 9 result:', allFoods);


//Current print (foods): [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]
//Current print (allFoods): taco -> sushi -> cupcake -> tofu -> cheeseburger

//-----------------------------------------------------------------------------

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

let hasSoup = foods.includes("soup");

console.log('Exercise 10 result:', hasSoup);


//Current print (foods): [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]
//Current print (hasSoup): false

//-----------------------------------------------------------------------------

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = []; //A new array for the odd numbers

for (let i = 0; i < nums.length;  i++) { //iteration method
   if (nums[i] % 2 !== 0)  { //if statement - checking for remainder after num / 2 (should be 0 if 'even')
      odds.push(nums[i]); //pushes the found numbers from the if statament to the new array "odds".
   }
   }

console.log('Exercise 11 result:', odds);

//Current print (odds): [ 5, 23, 15, 21, 9, 45,  7, 81 ]

//-----------------------------------------------------------------------------

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let fizz = []; //Fizz array for / 3.
let buzz = []; //Buzz array for / 5.
let fizzbuzz = []; //Fizzbuzz array for / by 3 and 5. 

for (let i = 0; i < nums.length;  i++) { //iteration method
   if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      fizzbuzz.push(nums[i]);
   } else if (nums[i] % 3 === 0) {
      fizz.push(nums[i]);
   } else if (nums[i] % 5 === 0) {
      buzz.push(nums[i]);
   }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


//Current print :
//fizz: [ 21, 72, 9, 66, 81 ]
//buzz: [ 100, 5 ]
//fizzbuzz: [ 15, 45, 90 ]

//-----------------------------------------------------------------------------

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let numList = numArrays [numArrays.length - 1];

console.log('Exercise 13 result:', numList);


//current print (numList): [ 7, 81, 90 ]

//-----------------------------------------------------------------------------

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

let num = numArrays[2][1];

console.log('Exercise 14 result:', num);

//current print (num): [ 66 ]

//-----------------------------------------------------------------------------

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/


let total = 0; 

for (let i = 0; i < numArrays.length; i++) {
   for (let j = 0; j <numArrays[i].length; j++) {
      total += numArrays[i][j];
   }
}

console.log('Exercise 15 result (for loops):\n', total);

//current print (num): [ 534 ]
//------------------------------------------------------------------------------ 

//Ex - 15 (for each)

let forTotal = 0; 

numArrays.forEach(subArray => {
    subArray.forEach(number => {
        forTotal += number;
    });
});


console.log('Exercise 15 result (for each):\n', forTotal);

//current print (num): [ 534 ]
//-----------------------------------------------------------------------------