UCount = 0;//keep track of score
Pcount = 0;
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
        Pcount++;//update score
    }
    else if(UserInput === 0 && Computerchoice === 2){
        status = "You win! Rock beats scissors."
        UCount++;
    }
    //when user inputs paper
    else if(UserInput === 1 && Computerchoice === 0){
        status = "You win! Paper beats rock"
        UCount++;
    }
    else if(UserInput === 1 && Computerchoice === 2){
        status = "You lose! Scissors beat paper."
        Pcount++;
    }
    //when user inputs scissors
    else if(UserInput === 2 && Computerchoice === 0){
        status = "You lose! Rock beats scissors."
        Pcount++;
    }
    else if(UserInput === 2 && Computerchoice === 1){
        status = "You win! Scissors beats paper."
        UCount++
    }
    return status;
}
let UserInput;
let Computerchoice;
let array = ['rock', 'paper', 'scissors'];

console.log("Lets play Rock Paper Scissors! First to 5 wins.");
let i = 0;
let round = 1;
while(UCount < 5 && Pcount < 5)
{
    //print round
    console.log("Round", round++);
   
    UserInput = prompt("Enter your choice here:");
    UserInput = UserInput.toLowerCase();//turn lowercase.

    if(UserInput === 'rock' || UserInput === 'paper' || UserInput === 'scissors'){

        console.log("You chose:", UserInput);

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
        console.log("Computer chose:", array[Computerchoice]);
        console.log(PlayRound(UserInput, Computerchoice));//use game mechanic
        //count score
        console.log("Your score:", UCount); 
        console.log("Computer's score:", Pcount);
        console.log("\n");
    }
    else{
        console.log("Invalid input, please refresh page to start over.");
        break;
    }
}
//determine winner only if all rounds were played (user didn't put invalid text)
if(UCount === 5 || Pcount === 5){
    if(UCount > Pcount){
        console.log("You win, but your opponent can't even think, how can you be proud of this achievement? Shame...");
    }
    else{
        console.log("You lose and your oponent can't even think, well done...");
    }
}
