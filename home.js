console.log('hello');
console.log('hello pavi');

//   this is command line ,it may be not uses (or) explain the code
// alert('hello this pavi');

// Variables
 var b ='practice';
 console.log(b);

 var SomeNumber ="45";
 console.log(SomeNumber);

//  document.getElementById("someText").innerHTML="Hey There";

//  var age = prompt('Hey What is your age ?') //it is like a question

//  document.getElementById("someText").innerHTML=age;


//  Numbers in Javascript

 var num1 = 10;
//  num1 = num1 +2;

// increment num1 by 1
 num1++; 
 console.log(num1);

 var num2 = 12;
 //Decrement num2 by 1
 num2--;
 console.log(num2);

 //Divide, Multiple * ,reminder%
 var num3 = 8;
  console.log(num3 % 6); // it's like also suitable above heading

  // Increment ,Decrement by any Number
  var num4 =15;
  num4 += 20;
    console.log(num4);
  
    // Function
    /*
    1. Create a function
    2. Call the function
    */

    // This is create
        function fun(){
          console.log("hey frontend developer")
        }
    // This is call
    fun();

    /*
    Let's create a function that take in a name and say hello follwe
    by your name 

    for example 
    Name:pavi
    Result : hellopavi
    */

    // function greeting(){
    //   var name = prompt("What is your name");
    //   var Result = 'hello' + '' + name;  // String Concatination
    //   console.log(Result);
    // }

    // greeting();


 

  // How do aruguments work in functions?
  //How do we add  2 numbers together in function?
  
  function sumNumber (a,b) {
    var result = a + b;
    console.log(result);

  }
  sumNumber(7,7); 

  // While loop

//   var num = 0

//   while  (num < 10){
//     num += 1;
//  console.log(num);
//   }

// For Loop

for (let num = 0; num <= 10; num++) {
  console.log(num)
}

//Data Type

/*
let Yourage = 18;  // number
let  yourname = "pavi"; //string
let name = {fistname="pavi", lastname="nane"}; //object
let truth = false; // boolean
let groceries = ["apple", "banana","orange"]; //array
let random; // undefined
let nothing = null;  //value null

*/

// String in Javascript (common method)

let fruit = 'banana';
let moreFruit = 'apple\nbanana';   //{\n} - start a new line
console.log(moreFruit);
console.log(fruit.length);
console.log(fruit.indexOf('nan')); 
console.log(fruit.slice(2,6)); // giving a num/word  start to end letters or number in number  show the result
console.log (fruit.replace('ban',"123"));  // it is replace that word to place some word or letter
console.log(fruit.toLocaleUpperCase());
console.log(fruit.toLocaleLowerCase());
// this two are same ,this is  show the place 
console.log(fruit.charAt(2));
console.log(fruit[2]);

console.log(fruit.split(',')); // this is split by comma in word
console.log(fruit.split(''));  // this is split by character

// Array

let fruits = ['apple','banana','orange','pineapple'];
fruits = new Array ('apple','banana','orange','pineapple');

console.log(fruits[2]);  // Access value at indesx 2nd

fruits[0] = 'pear' // replace the name 
console.log(fruits) 

for (let i=2; i < fruits.length; i++){  // this is giving number to 'i'   
  console.log(fruits[i])
}
// Array common methods

console.log('to string', fruits.toString());
console.log(fruits.join('+'));
console.log(fruits.pop(),fruits); // pop-eliminate the list in last word , 
console.log(fruits.push('blueberries'),fruits); // push - add a word in list
fruits.shift();  // shift - remove first element from an array
console.log(fruits); 
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['onion','tomato','garlic','beans']
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [1,5,2,10,6,25,335,115,8];
console.log(someNumbers.sort(function(a,b){return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); // sorted in descending  order

let emptyArray = new Array ();
for (let num = 0; num < 10; num++){
  emptyArray.push(num);
}
console.log(emptyArray);