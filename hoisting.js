//hoisting

//it is default behaviour, in which variable and functions that are declared are moved to the top of code in that scope.

function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined


// var code (global)
console.log(name); // undefined
var name = 'Mukul Latiyan';


// how interpreter sees the above code
var name;
console.log(name); // undefined
name = 'Mukul Latiyan'; 


// Function scoped
function fun(){
    console.log(name);
    var name = 'Mukul Latiyan'; 
}
fun(); // Undefined


function fun(){
    var name;
    console.log(name);
    name = 'Mukul Latiyan';
}
fun(); // undefined



// in order to avoid it 
function fun(){
    var name = 'Mukul Latiyan';
    console.log(name); // Mukul Latiyan
}
fun();


 //let example(global)
 console.log(name);
 let name='Mukul Latiyan'; // ReferenceError: name is not defined


 fun(); // Calling before declaration
      
 function fun(){ // Declaring
     console.log("Function is hoisted");
 }


 fun() // Calling the expression
  
let fun = () =>{ // Declaring
    var name = 'Mukul Latiyan';
    console.log(name);
}


fun() // Calling the expression
  
var fun = () =>{ // Declaring
    var name = 'Mukul Latiyan';
    console.log(name);
}




