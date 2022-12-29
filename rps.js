//start with game 
function PlayRound(UserInput, Computerchoice){
    let status;
    if(UserInput === Computerchoice)
    {
            status = "Draw!";
    }
    return status;

}
let UserInput;
let Computerchoice;
let array = ['rock', 'paper', 'scissors'];
console.log("Lets play Rock Paper Scissors!");
UserInput = prompt("Enter your choice here:");
UserInput = UserInput.toLowerCase();//turn lowercase
console.log("You typed:");
console.log(UserInput);

if(UserInput === 'rock'){//change value based on array postiton for comparison
    UserInput = 0;
}
else if(UserInput === 'paper'){
    UserInput = 1;
}
else if(UserInput === 'scissrors'){
    UserInput = 2;
}

Computerchoice = Math.floor(Math.random() * array.length);//select random element from array
console.log("Computers choice is");
console.log(array[Computerchoice]);

console.log(PlayRound(UserInput, Computerchoice));


