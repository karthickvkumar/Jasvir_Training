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
