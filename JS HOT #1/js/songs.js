
function main(){

    var numPrompt=prompt("1, 2, or 3?");

if (isNaN(numPrompt)){
    alert("Please enter a number not a word.")
}

else if (numPrompt === "1"){
    alert("One is the lonliest number that you'll ever do.")
}

else if (numPrompt === "2"){
    alert("Two can be as bad as one. It's the loneliest number since the number one.")
}

else if (numPrompt === "3"){
    alert("There is no three.")
}

else{
    alert("You did not enter a valid number.")
}
}