let UserInput;
let Computerchoice;
let array = ['r', 'p', 's'];
console.log("Lets play Rock Paper Scissors!")
console.log("Press 'r' for rock")
console.log("Press 'p' for paper")
console.log("Press 's' for scissors")
UserInput = prompt("Enter your choice here:")
Computerchoice = Math.floor(Math.random() * array.length);
console.log("Computers choice is")
console.log(Computerchoice, array[Computerchoice]);

