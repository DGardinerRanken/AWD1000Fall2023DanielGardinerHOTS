
function main(){
    var agePrompt=prompt("What is your age?");

if (isNaN(agePrompt)){
    alert("Please enter your age.")
}
else if (agePrompt <1 || agePrompt >200){
    alert("Age out of range!")
}
else if (agePrompt>=21){
    alert("Welcome to the venue!")
}

else if (agePrompt<21){
    alert("You're not old enough!")
}
}