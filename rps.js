//start with game 
//rock is 0, paper is 1, scissors is 2
function PlayRound(UserInput, Computerchoice){
    let status;
    //if theyre the same do this
    if(UserInput === Computerchoice){
        status = "Draw!";
    }
    //when user inputs rock
    else if(UserInput === 0 && Computerchoice === 1){
        status = "You lose! Paper beats rock."
    }
    else if(UserInput === 0 && Computerchoice === 2){
        status = "You win! Rock beats scissors."
    }
    //when user inputs paper
    else if(UserInput === 1 && Computerchoice === 0){
        status = "You win! Paper beats rock"
    }
    else if(UserInput === 1 && Computerchoice === 2){
        status = "You lose! Scissors beat paper."
    }
    //when user inputs scissors
    else if(UserInput === 2 && Computerchoice === 0){
        status = "You lose! Rock beats paper."
    }
    else if(UserInput === 2 && Computerchoice === 1){
        status = "You win! Scissors beat paper."
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
else if(UserInput === 'scissors'){
    UserInput = 2;
}

Computerchoice = Math.floor(Math.random() * array.length);//select random element from array
console.log("Computers choice is");
console.log(array[Computerchoice]);
console.log(PlayRound(UserInput, Computerchoice));


