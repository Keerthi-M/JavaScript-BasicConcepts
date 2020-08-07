/* Cypher Source website has 3ways to login to the site - Using
Mail, Google account, Facebook account. Login through any of the 3
ways are successful. Tom is Logging into the Cypher Source website
using the Google account. You should show the message as "Login is
successful" . If he doesn’t login , it should show “Login failed”.Logical operators 
and conditionals must be used */


// Initializing variables using "var" keyword
var mailAccount = false;
var facebookAccount = false;
var googleAccount = true;

// AND operator is used to get the output "Login is successful" as Tom login using Google account
if(mailAccount && facebookAccount == true)
{
console.log('Login failed');
}
else
{
console.log('Login is successful');
}
