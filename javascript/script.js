
//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn(){
    alert("Thanks for signing in");
}

//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp(){
var userInput = prompt("Enter your email please.");
console.log(userInput);
document.getElementById("output-here").innerHTML = "Thanks for signing up, " + userInput + "!";
}


//prompt: get user email
//save email to variable
//output variable to paragraph