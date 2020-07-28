/* Mobin has developed an Application that displays the
temperature. His Application displays the temperature in two
conditions :

➢ If greater than 23.5 °C, print its’ a hot day
➢ If it's less than 23.5 °C, print it's a cold day. */

var Day = temperature(24); // Declared a variable "Day" and the function "temperature" is called
 
function temperature(temp)
{
if(temp>23.5)
{
console.log("It is a hot day"); // As the temperature is 24 degree Celsius, it is a hot day
}
else
{
console.log("It is a cold day");
}
}
