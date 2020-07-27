/* Task description: Renu and Reka are preparing for the Mathematics examination.
Renu has a doubt in solving one of the problems. Reka helps her to
figure out the solution for the problem. Find the discount percentage
of the Dress which has it's listing price as 550 and selling price as 230? */

var x = 550;
var y = 230;
// camelSpacing naming convention is used to declare "discount amount" variable
var discountAmount = [(x-y)/x]*100;

// Math.floor() method is used to round off the discount amount
console.log(Math.floor(discountAmount)+'%');
