// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// Syntax - To create a Variable (Temp Storage)
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var age = 28;
console.log(age);

// String -> Any text value which is typed inside '' or ""

var email_id = "karthick@gmail.com";
console.log(email_id);

// Boolean -> Either true or false

var result = true;
console.log(result);

console.log(null);

var future_value;
console.log(future_value);

email_id = "abc@testdemo.com";
console.log(email_id);

// Object -> It is collection of Key and Values

// Syntax of Object

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var first_name = "karthick";
var last_name = "kumar";
var roll_number = 4785588;
var area = "chennai";

var studentInfo = {
  first_name : "karthick",
  last_name : "kumar",
  roll_number : 4785588,
  location : "chennai"
};

console.log(studentInfo);

// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

// To Read a Value -> object_variable_name.key;
// way-1 - Static key (If we know the key value, we can use this approach)
console.log(studentInfo.first_name);

// To Read a Value -> object_variable_name[key];
// way-2 - Dynamic key (If we dont know the key value, we can use this approach)
var key = "last_name";
console.log(studentInfo[key]);

// To Insert a new Value -> object_variable_name.newKey = value;
studentInfo.blood_group = "A +ve";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
studentInfo.first_name = "Jasvir";

// To delete a existing Record -> delete object_variable_name.key
delete studentInfo.roll_number;

console.log(studentInfo);

// Function -> Block of Code 
// Syntax for Creating a Function (Function Definition)

// function function_name(var1, var2, ... , varN){ // arguments
//   // code block
// }

// function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _

function addition(num1, num2){
  // var num1 = 100;
  // var num2 = 200;
  var result = num1 + num2;
  console.log(result);
}

// Syntax for Executing/Running the Function (Function Invocation)
// function_name(value1, value2, ... ,valueN); // parameter

// Array -> It is a collection of List data
// Syntax of creating an Array

// var variable_name = [ value_1, value_2, ... , Value_n ];

// value -> Number, String, Boolean, Object, Array, Function

var list_of_mark = [70, 64, 94, 88, 45, 70, 64, 94, 88, 45];

var name_list = ["asdfsadf", "reer", "dfbdf", "rtyrh"];

var studentList = [
  { name : "Karthick", age : 24},
  {name : "Ak", age : 20},
  { name : "Yuvi", age : 25}
];

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

// Insert a new value into Array

// push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

studentList.push({name: "Kumar", age: 28}, {name: "YK", age: 27})
console.log(studentList.length);

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);

studentList.unshift({name : "Zyan", age : 29});
console.log(studentList);

// To Read value from Array
// array_variable_name[index]

console.log(studentList[2].name);

// To edit a existing value from Array
// array_variable_name[index] = value;

studentList[2] = { name : "Smith", age : 30};
// studentList[2].name = "Smith";
// studentList[2].age = 30;


// To delete value from Array

// way-1
// pop() - It is used to remove value at the end of array record
// array_variable_name.pop()
studentList.pop();


//way-2
// shift() - It is used to remove value at the start of array record
// array_variable_name.shift()
studentList.shift();

//way-3 
// splice(index, deleteCount) - It will remove value at middle or any position of array
studentList.splice(2, 1);

console.log(studentList);

// Operators
// 1. Arithmetic Operator  +, -, *, /, %, ++, --
// 2. Assignment Operator  =
// 3. Comparision Operator  <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator  &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem Statement
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The user is eligible for Vote
3. If the given age is less then 18 -> Output - The user is not eligible for vote
*/

function check_voting_status(){
  var age = prompt("Enter your age");
  if(age >= 18 ){
    console.log("The user is eligible for Vote");
  }
  else{
    console.log("The user is not eligible for vote");
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
1. To give person age as input -> Number
2. idenfity -> less then 18 -> The person is Minor
3. idenfity -> greater then or equal to 18 and less than 60 -> The person is Major
4. idenfity -> greater then or equal to 60 -> The person is Super Citizen
*/

function check_person_age_category(){
  var age = prompt("Enter your age");
  if(age <= 0){
    console.log("Person doesnt exist");
  }
  else if(age < 18){
    console.log("The person is Minor");
  }
  else if(age >= 18 && age < 60){
    console.log("The person is Major");
  }
  else{
    console.log("The person is Super Citizen");
  }
}

/* 
Syntax - for (loop)
for(initialization;  condition; increment/decrement){ 
  //code block
}
*/

for(var count = 1; count <= 10; count++){
  console.log("Loop is running", count);
}

/*
Find even number for given N number of limit.
1. Get number (Nth number limit)
2. Logic for finding even number -> Number % 2 => 0
3. Repeat this logic till 1 to n number
*/

function check_even_numbers(){
  var Nth_number = prompt("Enter the last number");
  for(var count = 1; count <= Nth_number; count++){
    if(count % 2 === 0){
      console.log(count, "is a Even Number");
    }
  }
}