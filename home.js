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

for (let num = 0; num < 10; num++) {
  console.log(num)
}