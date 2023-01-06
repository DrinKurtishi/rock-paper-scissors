let rockbtn = document.querySelector('#rock');
let paperbtn = document.querySelector('#paper');
let scissorsbtn = document.querySelector('#scissors');
let array = ['rock', 'paper', 'scissors'];
let UserInput;
let Computerchoice;
let UCount = 0;//user score
let Pcount = 0;//Computer score

function Game(UserInput, Computerchoice)
{
    //if theyre the same do this
    if(UserInput === Computerchoice){
        document.getElementById("output").innerHTML = "Draw!"
    }
    //when user inputs rock
    else if(UserInput === 0 && Computerchoice === 1){
        Pcount++;//update score
        document.getElementById("output").innerHTML = "You lose! Paper beats rock."
    }
    else if(UserInput === 0 && Computerchoice === 2){
        UCount++;
        document.getElementById("output").innerHTML = "You win! Rock beats scissors."
    }
    //when user inputs paper
    else if(UserInput === 1 && Computerchoice === 0){
        UCount++;
        document.getElementById("output").innerHTML = "You win! Paper beats rock"
    }
    else if(UserInput === 1 && Computerchoice === 2){
        Pcount++;
        document.getElementById("output").innerHTML = "You lose! Scissors beat paper."
    }
    //when user inputs scissors
    else if(UserInput === 2 && Computerchoice === 0){
        Pcount++;
        document.getElementById("output").innerHTML = "You lose! Rock beats scissors."
    }
    else if(UserInput === 2 && Computerchoice === 1){
        UCount++;
        document.getElementById("output").innerHTML = "You win! Scissors beats paper."
    }
    document.getElementById('scoreboard').innerHTML = "<br> Your score: " + UCount + "<br>Computers score: " + Pcount;
    //determine winner
    if(UCount === 5 || Pcount === 5)
    {
       //disable buttons after either player reaches 5 wins
       document.querySelector("#rock").disabled = true;
       document.querySelector("#paper").disabled = true;
       document.querySelector("#scissors").disabled = true;
       //determine winnter
       if(UCount === 5)
       {
            document.getElementById("output").innerHTML = "You defeated the computer!"; 
       }
       else
       {
            document.getElementById("output").innerHTML = "You have been defeated by the computer!";
       }

    }
}

rockbtn.addEventListener('click', function(){
    UserInput = 0;//rock
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game(UserInput, Computerchoice);
});
paperbtn.addEventListener('click', function(){
    UserInput = 1;//paper
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game(UserInput, Computerchoice);
});
scissorsbtn.addEventListener('click', function(){
    UserInput = 2;//scissors
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game(UserInput, Computerchoice);
});

