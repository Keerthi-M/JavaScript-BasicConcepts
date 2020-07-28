// This code explains scope concept of the JavaScript by declaring local and global variable

// A global variable "globalLet" is declared outside of the function.
let globalLet = "This is a global variable";

function fun() {
// A local variable "localLet" is declared inside of the function.
let localLet = "This is a local variable";
console.log(globalLet);
console.log(localLet);
}

// function "fun" is called to print the output.
fun();