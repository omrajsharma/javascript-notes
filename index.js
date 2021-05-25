// print ( using node index.js )
// console.log("##################") ;
// console.log("hello world!") ;

// variables and constants
// var myName = "Omraj Sharma" ;
// var myAge = 20 ;
// var amIBoy = true ;
// var favNumber = null ;
// var standByVar ;
// console.log(myName, myAge) ;





// DATA TYPES
/*
undefined
boolean
number
string
bigint
symbol
*/
// console.log(typeof(myAge))
// console.log(typeof(myName))
// console.log(typeof(amIBoy))
// console.log(typeof(myLove))
// console.log(typeof(favNumber))
// console.log(typeof(standByVar))
// console.log(favNumber)      // bug 2



// challenge
// console.log(10+"20") ;   // 1020
// console.log(9-'5') ;   // 4  // bug!!
// console.log( "omraj" - "sharma") ;   // NaN (not a number)
// console.log( true + true ) ;     // 2

// challenge
// what is NaN?
// Nan is a property of the global object.
// It is a variable in global scope 
// the initial value of NaN is Not-A-Number
// console.log(isNaN(myAge)) ;     // false
// console.log(isNaN(myName)) ;    // true

// Challenge
// console.log(Number.isNaN(NaN)) ;
// NaN === NaN                      // false
// Number.NaN                       // NaN
// Number.NaN === NaN               // false
// isNaN(Number.NaN)                // true
// Number.isNaN(NaN)                // true




// OPERATORS






// CONTROL STATEMENTS AND LOOPS


// IF ELSE
// gender = 'male' ;
// if( gender == 'male'){
//     console.log("You are a male! thanks");
// }  
// else
//     console.log("You are a female! thanks");

// Q- check for leap year

// flasy value in javascript - 0,"",undefiner,null,false




// TERNARY OPERATOR
// only operator taking three variables
// var age = 18 ;
// var eligible = (age>=18) ? "Yes":"No" ;
// console.log(eligible) ;

// SWITCH STATEMENT
// var area = 'triangle' ;
// var PI = 3.142, r = 3, l = 5 , b = 4 ;
// switch(area){
//     case 'circle': console.log("area of circle : " , PI*r*r) ;
//                     break ;
//     case 'triangle': console.log("area of circle : " , (l*b)/2) ;
//                     break ;
//     case 'rectangle': console.log("area of circle : " , l*b) ;
//                     break ;
//     default:
//         console.log("Enter a valid data") ;
// }

// WHILE LOOPS
// var counter = 0 ;
// var limit = 10 ;
// while(counter < limit)
// {
//     console.log(counter) ;
//     counter++ ;
// }

// DO WHILE LOOP
// var num = 0 ;
// do{
//     debugger ;                       // using debugger in console
//     console.log(num) ;
//     num++ ;
// }while(num<10)

// FOR LOOPS
// for(var i = 0 ; i < 10 ; i++)
// {
//     console.log(i) ;
// }








// FUNCTIONS IN JS              DRY - do not yourself

// function definition
// function sum ( a , b){                  // (parameter1, parameter2)
//     console.log(a+b) ;
// }
// sum(1,2) ;                          // calling a function
// sum(2,3) ;                          // (argument1, argument2)
// sum(5,6) ;

// return 
// function sum(a,b)
// {
//     return a+b ;
// }
// console.log(sum(5,10)) ;

// ANNONYMOUS FUNCTION (function with no name)
// var funExp = function(a,b){
//     return a+b ;
// }
// console.log(funExp(5,10));



// CALL BACK FUNCTION
// function k ander ek function
// here multi is a call back function
// var names = ['om','nitin','chaman','hritik','pulkit']
// var nameChanged = names.map(multi)
// function multi (element){
//     return `hi my name is ${element}`
// }
// console.log(nameChanged);
// ANOTHER CALL BACK EXAMPLE
// var nums = [10,11,12,13,14,15,16,17,18,19]
// var numsModi = nums.map((element,index,arr) => {
//     return `for index: ${index} our value: ${element} of our array: ${arr}`
// })
// console.log(numsModi)










// ES6 (ECMA Script) -2015

// LET VS CONST vs VAR
// var -> function scope or global scope (can be used any where in the program or program)
// let,const -> block scope (can be used within the block)

// Template literals -> `${TEST}`
// let name = 'omrajsharma'
// for(let n=1; n<=10; n++)
//     console.log(`my name is ${name} and I am good. ${n}`)
// Another example
// tableOf = 5 ;
// for(var i = 1 ; i <= 10 ; i++)
// {
//     console.log(`${tableOf} * ${i} = ${tableOf*i}`) ;
// }


// Default Parameters
// function mult(a=2,b=3)
// {
//     return a*b ;
// }
// console.log(mult()) ;

// function greet(name='guest', grt='It our pleasure to have you with us') {
//     console.log(`Hello ${name},\nWelcome to our place, ${grt} \nThank You :)`)
// }
// greet()




// ARROW FUNCTIONS          ############################################ IMPORTANT #################################################
// we can call function before the declaration with normal functions
// simple arrow function
// var greet = () => `Good Morning` ;
// console.log(greet());           
// var sumi = sum(10,5) ;
// console.log(sumi) ;
// function sum(a,b){
//     return a+b ;
// }
// we can'nt call function before declation in arrow functions          ####
// const sum = (a,b) => {
//     return `your sum is : ${a+b}`;
// }
// console.log(sum(1,2));
// for single line function there is no need to return and {}
// const sub = (a,b) => a-b ;
// console.log(sub(10,5)) ;








// ARRAYS
// arrays are the prototype of this class
// var arr = ['omraj', 'shyam', 'nitin', 20, 18, 21, true] ;
// console.log(arr[4]) ;
// second type of creating an array
// var arr = new Array ;        // optional
// arr = ['om','shyam'] ;
// console.log(arr[1]) ;

// traversal in array (navigation through an array)
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh'] ;
// for(var i = 0 ; i < name.length; i++)
//     console.log(name[i]);



// for in loop & for of loop (es6)
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh'] ;
// for (let elements in name){                 //(for in) it return INDEX number
//     console.log(name[elements]) ;
// }
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh'] ;
// for (let elements of name){                   //(for of) it return VALUES
//     console.log(elements) ;
// }

// forEach()
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh','rocki bhai'] ;
// name.forEach(function(element,index,arr){
//     console.log(element, index, arr) ;
// }) ;
// name.forEach( element => console.log(element)) ;

// SEARCHING AND FILTER in array
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh','rocki bhai'] ;
// indexOf()            -> forward searching
// var start = 2 ;                         // starting index
// console.log(name.indexOf('shyam', start)) ;

// lastIndexOf()        -> backward searching
// console.log(name.lastIndexOf("omraj")) ;

// includes()
// console.log(name.includes("omraj")) ;

// find() or findIndex                  // returns undefined values if not satisfied
// returns only one at a time
// const prices = [200,300,400,500,600,700,800,900] ;
// console.log(prices.find((element, index, array) => {
//     return element < 600 ;
// })) ;
// console.log(prices.findIndex( element => element < 400 )) ;

// filter()             
// return many at a time
// const prices = [200,300,400,500,600,700,800,900] ;
// console.log(prices.filter((element,index) => element<600)) ;

// Sorting and Comaparison
// var name = ['omraj','shyam','nitin','nitin','abhishek','utkarsh','rocki bhai'] ;
// console.log(name.sort()) ;           //  converts element into string

// push()   -> add at the end
// const animals  = ['pigs','goat','sheep'] ;
// animals.push('chicken') ;
// console.log(animals) ;
// const len = animals.push('omi') ;       // it returns new len of array
// console.log(len) ;

// unshift      -> add at the beginning of the array
// const name = ['omraj','shyam','rocki'] ;
// var len = name.unshift('nitin') ;
// console.log(len, name) ;

// pop()        // returns the element removed
// const name = ['omraj', 'shyam', 'nitin', 'nitin'] ;
// console.log(name.pop()) ;
// var check = name.pop() ;
// console.log(check) ;

// shift        // pop from the beginning
// const name = ['omraj', 'shyam', 'nitin', 'nitin'] ;
// console.log(name.shift()) ;

// 5:40:00

// splice method
// const name = ['omraj', 'shyam', 'nitin', 'nitin'] ;
// // for putting
// const newName = name.splice(0,0,'Salam Rocky Bhai');
// // for deleting
// const newName1 = name.splice(3,2);
// console.log(name);
// var name = ['om','raj','sharma']
// console.log(name)
// name.splice(name.length,0,'rocky')
// console.log(name)
// What does splice method returns
// names = ['om','raj','sharma','majnu']
// spliced = names.splice(0,2)
// console.log(spliced)            // it returns the removed value from the array













// #################################### import methods ##########################################

// MAP FUNCTION (creates a new array but foreach function does not create any new array) // can also use in chaining
// var even = [0,2,4,6,8,10]
// var selected = even.map((element,index,arr) =>{         // it return bool for which test case is passed
//     return element<5                                    // [ true, true, true, false, false, false ]
// })
// console.log(selected)


// FILTER FUNCTION
// var even = [0,2,4,6,8,10]
// var selected = even.filter((element,index,arr) =>{         // it return just those value for which test case is passed
//     return element<5                                    // [ 0, 2, 4 ]
// })
// console.log(selected)

// challenge
// 1. find square root of each element in array
// var num = [25,36,49,64,81]
// num = num.map((element) => {
//     return Math.sqrt(element)
// })
// console.log(num)

// 2. multiply each element by 2 and return only those element which are greater than 10?
// let num = [2,3,4,5,6,7,8]
// let num1 = num.map((element)=>{
//     return element*2
// }).filter((element)=>{
//     return element>10
// })
// // control goes left to right
// console.log(num1)
// let num2 = num.map((element) => element*2).filter((element)=> element>7).map((element) => element/2)
// console.log(num2)

// REDUCE METHOD (flatten 2D, 3D array into a single dimentional array)
// takes four argument Accumulator, current value, current index, source array
// used in finding sum, multiplication, average of all the elements in an array
// let num = [1,2,3,4,5]
// let sum = num.reduce((accumulator, element, index, arr) => {
//     return accumulator += element;
// })
// console.log(sum)            // 15
// FLATTENING A 2D ARRAY
// const info = [
//     ['om','sharma'],
//     ['nitin','sharma'],
//     ['hritik','rethod'],
//     ['harsh','agarwal']
// ]
// let flatArray = info.reduce((accum,element)=>{
//     return accum.concat(element) ;
// })
// console.log(flatArray)













// STRING
// let firstName = 'Omraj';
// let lastName = "Sharma";
// let passion = new String("Software Development");
// console.log(firstName);
// console.log(passion);   //[String: 'Software Development']

// Length of a string (property)
// console.log(passion.length)

// Escape Character
// let para = 'To sir,\nI am Omraj Sharma is my name';
// console.log(para);

// Find String in string
// let intro = 'hi, I am Omraj Sharma. I am a second year IT student';
// let pos = 3;
// console.log(intro.indexOf('Omraj', posStart))

// search()
// let intro = 'hi, I am Omraj Sharma. I am a second year IT student';
// console.log(intro.search('Omraj'))      // it will can'nt take second arrgument as starting position

// extracting string parts
// extracting each character from the string
// let names = 'Omraj Sharma'
// for (x of names){
//     console.log(x)
// }
// Slice()
// let fruits = 'apple, bnana, kiwi';
// let check = fruits.slice(0,5);
// console.log(check);

// challenge 
// print only 280 character of a tweet
// let test = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed aliquid similique ipsa ex sunt culpa deserunt, id non fugiat ad labore ab, cum consequatur dolorem natus quia facilis quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed aliquid similique ipsa ex sunt culpa deserunt, id non fugiat ad labore ab, cum consequatur dolorem natus quia facilis quae.';
// console.log(test.slice(0,280));

// sbstring()       // can'nt use -ve indexes
// String.substring(start,end);
// let name = 'omraj sharma';
// console.log(name.substring(5,-2));      // it will print from 0-4 IF WE USE -VE POSITION (EXCEPTION);

// substr
// substr(start,till length)
// let temp = 'lorem ipsum dolor amit';
// console.log(temp.substr(6,5));

// replace      (only replace first match. no change in original data)
// let intro = 'hi, i am omraj sharma. i am a good boy';
// let introChanged = intro.replace('omraj', 'shyam');
// console.log(introChanged)

// extracting characters
// charAt()
// let myName = "Omraj Sharma";
// console.log(myName.charAt(4))          // j
// charCodeAt
// let char = 'है'
// console.log(char.charCodeAt(0));         // 2361

// property access
// var test = 'Omraj Sharma';
// console.log(test[0])        // access using square brackets

// Usefull methods
// toUpperCase
// toLowerCase
// concat
// trim (removes white spaces from the beginning and last)
// split (string to array)  #Important
















// DATE AND TIME
// 1 jan, 1970

// 4 ways to create date objects
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date String)
// #THIS IS HOW IT IS DONE
// let currDate = new Date()
// console.log(currDate)
// #FOR BETTER REPRESENTATION
// console.log(new Date().toLocaleString())
// console.log(new Date().toString())
// console.log(Date.now())         // return seconds from 1jan1970
// var d = new Date(2002, 07, 09, 05, 30, 33, 00);
// console.log(d.toLocaleString());
// # Date time string
// var d = new Date("August 09, 2002 05:30:00")
// console.log(d.toLocaleString())
// # Date From Millisecond
// console.log(Date.now())
// console.log(Date(1612960178280))

// Important Methods of Date
// toLocalString
// getFullYear
// getMonth
// getDate 
// getDay

// Setting up date manually
// let d = new Date()
// console.log(d)
// d.setFullYear(2020)
// console.log(d)
// d.setMonth(2)
// d.setDate(21)
// d.setHours(6)
// console.log(d)
// console.log(d.getMonth())

// Similarly Get, Set for time 




















// DOM BOM Window Object
// Window is the entire window where as document is just the website content/body. document is a subset of window
// Browser Object Model (BOM) consistes of object like navigation, history, screen, location and document
// Document object model (DOM)
// window = DOM+BOM+Javascript
// $0.style.backgroundColor = "pink" (DOM)
// window.location.href = 'https://templink.com/'  (BOM)
// alert/ confirm / prompt are also BOM
// Document -> HTML -> BODY, HEAD -> 

// On Console
// document
// document.documentElement (return root element of document i.e. <html>)
// document.body (shows body)
// document.body.chileNodes
// document.body.chilren
// document.body.hasChildNode
// document.body.firstChild
// document.body.firstElementChild.firstElementChild
// let header = document.body.firstElementChild
// header.style.color = 'red';
// let check = document.querySelector('.class1');
// check.style.color = '#456';
// document.body.parentElement
// ############## Element ########### is used to not consider text and white spaces
// document.queryselector('#').innerhtml = '';      # we can also use class with .
// document.queryselectorAll('#').innerhtml = '';      # we can also use class with .
// document.queryselectorAll('li .class').innerhtml = '';      # we can also use class with .





















// Events
// check ### <Event.html> ### 
// Event Object is the parent object of the event object

// Timing Based Events
// setTimeout
// setInterval
// clearTimeout
// clearInterval

// Set Interval
// var inter = setInterval( ()=>{
//     document.getElementById('head').innerHTML = n;
//     n++;
// } , 1000 )
// let n = 0;
// function stop() {
//     clearInterval(inter);
// }

// Set Timeout
// console.log('before set time out')
// setTimeout(() => {
//     console.log('after 2 second')
// }, 2000);
// console.log('after set timeout')













// OOPS 
// Object literal and this ( this means current context)
// Key: value pair data structures
// const bioData = {
//     name : "Omraj Sharma",
//     age : 20,
//     college : "Maharaja Agrasen Institute of Technology",
//     getData : function(){
//         console.log(`Hello Mr./Mrs ${this.name} your are ${this.age} years old and your are studing in ${this.college}`)
//     },
//     getThis() {
//         console.log(this)
//     }
// }
// bioData.getThis();

// var name = 'omraj';
// const bio = {
//     name : 'ommi',
//     age : 20,
//     college : 'MAIT',
//     func : function () {
//         return this.name;
//     }
// }
// console.log(bio.func())





















// Destructuring
// traditional Way
// const bioData = ['Omraj', 'Sharma', 20];
// let firstName = bioData[0]
// let secondName = bioData[1]
// let age = bioData[2]
// console.log(secondName)
// ARRAY DESTRUCTURING
// const bioData = ['Omraj', 'Sharma', 20];
// let [firstName, secondName, age, college='MAIT'] = bioData;
// console.log(firstName)

// Destructuring key must be same as of the object keys
// Object Destructuring
// const lapi = {
//     brand : "Lenovo", 
//     model : "X1 Carbon",
//     price : 1.75,
//     metal : true
// }
// let {brand, model, pri, met} = lapi;
// console.log(model);


// Object Properties
// let name = "Omraj Sharma";
// let college = "MAIT"
// const bio = {
//     [name] : " This is my name",        // Dinimic value addition from top
//     20 : "my age",
//     [5+7] : "is the submission operation",  // calculation cab be performed
//     college     
// }
// console.log(bio)



// Spred Operator (...)
// let smallName = ['omraj', 'shyam', 'kirti', 'Preet', 'Raj'];
// let bigName = ['nitin', 'riya', 'abhiram', ...smallName];
// console.log(bigName)








// Error handling
// try {
//     console.log('Start of try runs');

//     unicycle;

//     console.log('End of try runs --- never reached');
// } catch(err) {
//     console.log('Error has occured ' + err.message) ;   // err is an object containing mainly name and message of the error
// } finally {
//     console.log('this will always run');
// }


// // Throw
// try{
//     var leti;
//     if( leti === undefined){
//         throw new SyntaxError("leti is undefined please define this")
//     }
// } catch(err){
//     console.log(err);
// }

// // Another throw example
// let a = 5;
// try{
//     if( a > 5 ){
//         throw "Positive Number";
//     } else if ( a == 0 ) {
//         throw "Zero number";
//     } else if( a < 0 ) {
//         throw "Negative number";
//     } else {
//         throw "Not a number";
//     }
// } catch(err) {
//     console.log(err);
// }

// var name = "Number(1234)";
// console.log(name.split("").reverse().join(""));























// ##### Advance JavaScript #####

// EVENT PROPOGATION
// Bubbling Phase : Bottom to Top (P TO WINDOW)
// Capturing Phase : Top to Bottom (WINDOW TO P) 
// Check eventPropogation.html for reference

































// Higher Order Function
// wo function jo doosre function to as a argument accept krte ho 

// Call Back Function
// wo function jo doosre function me as a argument pass hota hai 

// Calculator
// const add = (a,b) => {
//     return a+b ;
// }
// const sub = (a,b) => {
//     return a-b;
// }
// const multi = (a,b) => {
//     return a*b;
// }
// const div = (a,b) => {
//     return a/b;
// }
// const calci = (num1, num2, operator) => operator(num1, num2) ;
// console.log(calci(1,2,sub));



























// Hoisting in JavaScript




























// Scope Chain and Lexical(Inherarchy or sequence) Scoping
// Lexical Scoping means now the inner function can get access to their function variable but vice versa is not true;
// (Inner can access outer level)
// var a = 5;
// function check() {
//     let a = 10;
//     console.log(a);
// }
// check();

// Lexical Scoping example for mdn
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       alert(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// null <- global <- display <- display1  (Lexical Environment)
// moving from local to parent lexical envi to their parent environment is called 
// ###$$$(SCOPE CHAIN)$$$###
// over multiple levels
// function display(){
//     console.log(b);
//     function display1(){
//         console.log(b);
//     }
//     display1();
// }
// var b = 10;
// display();




// void fun()
// {
//     printf("%d", x);
// }

// void dummy1()
// {
//     int x = 5;

//     fun();
// }

// void dummy2()
// {
//     int x = 10;

//     fun();
// }
// dummy1();        // will print 5
// dummy2();        // will print 10

































// CLOSURE
// MDN example
// functions in javascript form closures
// A closure is the combination of a function and the lexical environment within which that function was declared.
// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();
























// Synchronous and Asynchrnous JS programming
// Sync -  10 min then only 5sec work
// Asynchronous -  10 min with 5 sec parallely


// Synchronous Example
// function second(){
//     console.log("Second called !! ;)");
// }
// function first() {
//     console.log("First Function Called !! :)");
//     second();
//     console.log("First Called again");
// }
// first();


// Asynchronous Example
// function second(){
//     setInterval(() => {
//         console.log("second function is called )(((");
//     }, 2000);
// }
// function first() {
//     console.log("First Function Called !! :)");
//     second();
//     console.log("First Called again");
// }
// first();
























// Event Loop 
// Means that jab hum hum setTimeInterval use krte hai to wo waiting k time pe web api mei chala jata hai and jab doosre function run krte hai lete hai in between the timmer is set. jab timer over hojata hai to wo quere mei lagke firse excution stack mei aajata hai.











// Interview Important
// Function Currying
// function sum(num1){
//     return function(num2) {
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }

// const multi = (num1) => (num2) => (num3) => console.log(num1*num2*num3);

// sum(3)(5)(8);
// multi(3)(5)(8);

























// Call Back Hell
// setTimeout(() => {
//     console.log("Numer 1 is done")
//     setTimeout(() => {
//         console.log("Numer 2 is done")
//         setTimeout(() => {
//             console.log("Numer 3 is done")
//             setTimeout(() => {
//                 console.log("Numer 4 is done")
//                 setTimeout(() => {
//                     console.log("Numer 5 is done")
//                     setTimeout(() => {
//                         console.log("Numer 6 is done")
//                         setTimeout(() => {
//                             console.log("Numer 7 is done")
//                             setTimeout(() => {
//                                 console.log("Numer 8 is done")
//                                 setTimeout(() => {
//                                     console.log("Numer 9 is done")
                                    
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);










// 'use strict'
// with this we can't use any variale without declaring like (x = 10) wrong
// Strict mode makes it easier to write "secure" JavaScript.














// CLASSES


// Functional classes
// function vehicle(type, color){
//     this.type = type;
//     this.color = color;
//     this.getInfo = getInfo;
// }
// function getInfo(){
//     return `Your Car Type is ${this.type} and its color is ${this.color}`;
// }
// let maruti = new vehicle('fourWheeler', 'white');
// console.log(maruti.getInfo());

// function student(name, standard) {
//     this.name = name;
//     this.standard = standard;
//     this.greet = () => `Welcome ${this.name} to ${this.standard} standard`;
// }
// var om = new student('om', 14);
// console.log(om.greet())

// PROTOTYPE Property
// The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object
// function person(name, age, sex){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }
// person.prototype.getInfo = () => `Hello Mr./Mrs ${this.name}. Yours age is ${this.age} and you are a ${this.sex}`;
// var omraj = new person("Omraj Sharma", 20, "male");
// console.log(omraj.getInfo());



// OBJECT LITERALS
// let food = {
//     type : "indian",
//     times : 3,
//     getInfo : function(){
//         return `You likes ${this.type} type of food and your ate for ${this.times} times.`;
//     } 
// }
// console.log(food.getInfo());
// food.type = 'chinese';
// console.log(food.getInfo());





// SINGLETON CLASS Using a function
// let hobby = new function() {
//     this.type = 'coding';
//     this.hourSpent = '2-4';
//     this.getInfor = () => `Your hobby is ${this.type} and you do it for ${this.hourSpent} hours`;
// }
// console.log(hobby.getInfor());
// hobby.type = 'cooking';
// hobby.hourSpent = '0-0.5';
// console.log(hobby.getInfor());


// CLASSES
// classes declaration
// function declaration is hoisted(we can use function before declaration) but class is not(can't use class before declaration)
// class polygon {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }
// let p = new polygon(1,2);
// console.log("Polygon : ", p);

// Another way to define a class
// let polygon = class {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log("Polygon : ", polygon);
// let p = new polygon(10, 20);
// console.log("p : ", p);

// function fruit(name, color) {
//     this.name = name;
//     this.color = color;
//     this.getInfo = getInfoFruit;
// }
// function getInfoFruit() {
//     return 'this ' + this.name + ' Fruit is ' + this.color + " in color.";
// }
// let orange = new fruit("orange", "Orangish");
// console.log(orange.getInfo());
// orange.color = 'pink';
// console.log(orange.getInfo());


// STATIC METHOD
// Static methods are methods relevant to all instances of a class — not just any one instance.
// NEED TO UNDERSTAND


// INHERITENCE

// EXTENDS 
// class animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name, 'speaks');
//     }
// }
// class dog extends animal {
//     speak() {
//         console.log(this.name, 'barks');
//     }
// }
// let chikki = new dog("chikki");
// chikki.speak(); // hits local class function
// let tommy = new animal('tommy');
// tommy.speak();  // hits main class function

// SUPER
// class animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name, 'speaks');
//     }
// }
// class dog extends animal {
//     speak() {
//         super.speak();
//         console.log(this.name, 'barks');
//     }
// }
// let chikki = new dog("chikki");
// chikki.speak(); // hits local class function

// Another Method
// class parent {
//     constructor(name){
//         this.name = name;
//     }
// }
// class child extends parent {
//     constructor (name, standard) {
//         super(name);    // calling super constructor 
//     }
//     display(){
//         console.log(this.name);
//     }
// }
// let om = new child('om');
// om.display();

// Hacker Rank Problem
// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
// Rectangle.prototype.area = function() {
//     return (this.w * this.h);
// }
// class Square extends Rectangle {
//     constructor(s) {
//         super(s,s);
//     }
// }
// let sq = new Square(3);
// console.log(sq.area());




















// Template Literal
// let name = 'Omraj Sharma';
// let course = 'B.Tech';
// let age = 20;
// console.log(`hi this is ${name} 
// and I am currently pursuing ${course} 
// and I'm currently ${age} years old`);


// GOOD EXAMPLE
// var a = 5;
// var b = 10;
// function foo(strings, ...values) {
//     console.log("." + strings[0] + ".");
//     console.log("." + strings[1] + ".");
//     console.log("." + strings[2] + ".");
//     console.log("." + strings[3] + ".");
//     console.log(values[0]);
//     console.log(values[1]);
//     console.log(values[2]);
// }
// OUTPUT
// foo`Sum ${a + b}
// Product ${a * b}
// Division ${b / a}`;

// .Sum .
// .
// Product .
// .
// Division .
// ..
// 15
// 50
// 2











































// REGULAR EXPRESSION or RegEx 

// BY CODE WITH HARRY

// let reg = /harry/;  // This a regex expression literal in js
// console.log(reg.source);
// console.log(reg);



// function to match expression

// exec() - exactly function
// let s = "Hi, I am omRaj Sharma. also you can call me omraj";
// let regName = /Omraj/;
// FLAGS
// regName = /Omraj/g;     // g - global
// regName = /Omraj/i;     // i - case insensitive
// regName = /Omraj/m;     // multiline
// regName = /Omraj/u;     // unicode
// regName = /Omraj/y;     // 

// console.log(regName.exec(s));   // first
// console.log(regName.exec(s));   // second
// console.log(regName.exec(s));   //null
// let result = regName.exec(s);   // object given
// console.log(result.input);
// console.log(result.index);

// test() - returns true or false
// let intro = "Hi! I'm Omraj Sharma and I am IT student";
// let check = /Omraj/;
// console.log(check.test(intro));

// match() - returns an array of result or null
// let intro = "hello this is Omraj Sharma. also my name is Omraj";
// let reg = /Omraj/g;
// console.log(intro.match(reg));

// search() - returns index of first match else return -1
// let intro = "Hello this is Omraj Sharma";
// let reg = /omraj/i;
// console.log(intro.search(reg));

// replace() - returns new replaced string with all the replacements
// let intro = "Hi this is omraj sharma and i am a boy";
// let reg = /omraj/;
// console.log(intro.replace(reg, 'shyamraj'));

// HACKERRANK
// const reg = new RegExp('abc');
// let check = "hi ji omraj is here abc";
// console.log(reg.exec(check));   // true


// Character Class
// .	The period matches any single character, except line terminators (e.g., a newline).
// \d	A single digit character (i.e., [0-9]).
// \D	A single non-digit character (i.e., [^0-9]).
// \w	A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
// \W	A single non-word character (i.e., [^A-Za-z0-9_]).
// \s	A single whitespace character. This includes space (), tab (\t), form feed, line feed, and other Unicode spaces.
// \S	A single non-whitespace character (i.e., [^\w]).

// Character Sets
// [abcd] or {a,b,c,d} or [a-d]
// Anything other than above is [^abcd] or [^a-d]


// Alteration
// let intro = "e b c d ";
// let reg = /a|e/;
// console.log(reg.exec(intro));

// Boundaries





















// hackerrank
// let re = new RegExp('a|e|i|o|u');
// let check = 'a';
// console.log(re.exec(check));

// ASSETS
//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence









































// Let and Const || Temporal Dead Zone || Syntax, Reference, Type Error
// Let and Const are hoisted in JS
// console.log(a)  // a is only accessed after initialization. Hoisted is done but the memory allocated is not in global object but in script object which can only be accessed when initally the identifier is defined.
// ###TEMPORAL DEAD ZONE### - time between hoisting in let and the initialization. the term to describe the state where variables are un-reachable. 
// ###REFERENCE ERROR### - accessing variable in temporal dead zone.
// let a = 10;     // ERROR - let is strict then var
// console.log(b)
// var b = 1;      // UNDEFINED
// let a = 5;          // Uncaught ###SyntaxError###: Identifier 'a' has already been declared
// const pie = 3.14
// pie = 5         // Uncaught ###TypeError###: Assignment to constant variable. - more strict then let
// const pp;        //SyntaxError: Missing initializer in const declaration - now allowed
// pp = 10;










// Block Scope and Shadowing in JS
// Block and Scope are two Different Things
// Block (compound statement) -> {   }
// let & const are in block scope
// var is in global scope
// SHADOWING
// var a = 10 
// if(true){
//     var a = 5;
//     console.log(a);      // 5
// }
// console.log(a);         // 5
// ILLEGAL SHADOWING
// let a = 5;
// {
//     var a = 10;  // can shadow using let only
// }
// -vice versa is valid
// var a=5;
// {
//     let a = 10; 
// }
// -another way
// let a = 5;
// function x() {
//     var a = 10;
// }
































// #### CLOSURE #### - function bind together with its lexical environment
// here in the closure value a is saved
// function x(){
//     var a = 9;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// ANOTHER EXAMPLE
// function x(){
//     var a = 9;
//     function y(){
//         console.log(a);
//     }
//     return y;   // it will not just return y but a closure is returned
// }
// var z = x();    // z -> y()
// console.log(z);
// z();    // print 9 (a=9) even if the x execution context has gone

// ANOTHER METHOD
// function a(){
//     var x = 7;
//     function b(){
//         function c(){
//             function d(){
//                 console.log(x);
//             }
//             d();
//         }
//         c();
//     }
//     b();
// }
// a();

// ANOTHER METHOD (does not for multilevel )
// function a(){
//     function b(){
//         function c(){

//             var x = 8;
//             function d(){
//                 console.log(x);
//             }
//             return d;

//         }
//         c();
//     }
//     b();
// }
// var y = a();
// console.log(y);

// ANOTHER METHOD
// function a(){
//     var x = 7;
//     function b(){
//         var y = 8;
//         function c(){
//             console.log(x,y);
//         }
//         c();
//     }
//     b();
// }
// a();























// SET-TIMEOUT + CLOSURES INTERVIEW QUESTION
// function x(){
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("after setTimeOut function!!\n")
// }
// x();

// PRINTING COUNTING EVERY SECOND
// function x(){
//     var i = 1;
//     setInterval(() => {
//         console.log(i);
//         i++;
//     }, 1000);
// }
// x();

// 
// function x(){
//     for(let i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000)
//     }
//     console.log("after loop");
// }
// x();
// Using var
// function x(){
//     for(var i = 1; i <= 5; i++){
//         let temp = i;
//         setTimeout(() => {
//             console.log(temp);
//         }, i*1000)
//     }
//     console.log("after loop");
// }
// x();
// ANOTHER METHOD
// function x(){
//     for(let i = 1; i <= 5; i++){
//         function closured(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000)
//         }
//         closured(i);        
//     }
//     console.log("after loop");
// }
// x();