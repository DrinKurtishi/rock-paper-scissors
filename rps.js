let rockbtn = document.querySelector('#rock');//the three buttons
let paperbtn = document.querySelector('#paper');
let scissorsbtn = document.querySelector('#scissors');
let array = ['rock', 'paper', 'scissors'];
let UserInput;
let Computerchoice;
let UCount = 0;//user score
let Pcount = 0;//Computer score
let UGcount = 0;//User rounds score
let PGcount = 0;//PC rounds score
let image = document.createElement("img");//user choice image
let pcimage = document.createElement("img");//PC choice image

//display initial Game State.
document.getElementById('myRounds').innerHTML = UGcount;
document.getElementById('PCrounds').innerHTML = PGcount;
document.getElementById('MyScore').innerHTML = UCount;
document.getElementById('PCscore').innerHTML = Pcount;
document.getElementById("output").innerHTML = "Are you ready?"; 
image.src = "images/grey.png";//add 2 images first 
pcimage.src = "images/grey.png";//as placeholders
document.getElementById("MyPic").appendChild(image);//adding the
document.getElementById("PCpic").appendChild(pcimage);//placeholders
document.getElementById("body").style.backgroundColor = "#121212";
document.getElementById("body").style.color = "whitesmoke";
//end of initial game state


function resetScores(){
   UCount=0;
   Pcount=0;
   document.getElementById('MyScore').innerHTML = UCount;
   document.getElementById('PCscore').innerHTML = Pcount;
   document.getElementById("output").innerHTML = "Are you ready?"; 
   document.getElementById("final-output").innerHTML = "";
   document.querySelector("#rock").disabled = false;
   document.querySelector("#paper").disabled = false;
   document.querySelector("#scissors").disabled = false;
   image.src = "images/grey.png";//add 2 images first 
   pcimage.src = "images/grey.png";//as placeholders
   document.getElementById("MyPic").appendChild(image);//adding the
   document.getElementById("PCpic").appendChild(pcimage);//placeholders
}

function newRound(){//new round on button click
   if(UCount != 3 && Pcount != 3){//dont let user change round mid game
    alert("You can't restart a round!");
    return;
    }
    resetScores();
}
   
function newGame(){
   UGcount = 0;//also reset round scores
   PGcount = 0;
   document.getElementById('myRounds').innerHTML = UGcount;//display round scores
   document.getElementById('PCrounds').innerHTML = PGcount;
   resetScores();
}
function DisplayChoices(UserInput, Computerchoice){
        //put desired image of users choice
        if(UserInput === 0){//display rock
            image.src = 'images/rock.png';
        }
        else if(UserInput === 1){//display paper
            image.src = 'images/paper.png';
        }
        else if(UserInput === 2){//display scissors
            image.src = 'images/scissors.png';
        }
    
        //put desired image of computers choice
        if(Computerchoice === 0){//display rock 
            pcimage.src = 'images/rockPC.png';
        }
        else if(Computerchoice === 1){//display paper
            pcimage.src = 'images/paperPC.png';
        }
        else if(Computerchoice === 2){//display scissors
            pcimage.src = 'images/scissorsPC.png';
        }
    
         //display chosen elements
         document.getElementById("MyPic").appendChild(image);
         document.getElementById("PCpic").appendChild(pcimage);
}
function DetermineOutcome(UserInput, Computerchoice){
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
            document.getElementById("output").innerHTML = "You lose! Scissors beats paper."
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
        document.getElementById('MyScore').innerHTML = UCount;
        document.getElementById('PCscore').innerHTML = Pcount;
        //determine winner
        if(UCount === 3 || Pcount === 3)
        {
           //disable buttons after either player reaches 3 wins
           document.querySelector("#rock").disabled = true;
           document.querySelector("#paper").disabled = true;
           document.querySelector("#scissors").disabled = true;
           //determine winner
           if(UCount === 3){
                UGcount++;
                document.getElementById('myRounds').innerHTML = UGcount;
                document.getElementById("final-output").style.color = "#059c0f";
                document.getElementById("final-output").innerHTML = "You won this round!"; 
           }
           else {
                PGcount++;
                document.getElementById('PCrounds').innerHTML = PGcount;
                document.getElementById("final-output").style.color = "#FF0000";
                document.getElementById("final-output").innerHTML = "You lost this round!";
           }
           if(UGcount === 3){
                document.querySelector('#newRound').disabled = true;
                document.getElementById("final-output").style.color = "#059c0f";
                document.getElementById("final-output").innerHTML = "You defeated the A.I!"; 
           }
           else if(PGcount === 3){
                document.querySelector('#newRound').disabled = true;
                document.getElementById("final-output").style.color = "#FF0000";
                document.getElementById("final-output").innerHTML = "You got defeated by A.I!";
           }
    
        }

}
function Game()
{
    DisplayChoices(UserInput, Computerchoice);
    DetermineOutcome(UserInput, Computerchoice);
}

rockbtn.addEventListener('click', function(){//when user presses rock
    UserInput = 0;//rock
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game();
});
paperbtn.addEventListener('click', function(){//... when paper
    UserInput = 1;//paper
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game();
});
scissorsbtn.addEventListener('click', function(){//... when scissors
    UserInput = 2;//scissors
    Computerchoice = Math.floor(Math.random() * array.length);//random
    Game();
});

//for background choosing
function transition(){
    document.body.style.transition="1s";
}
function purple(){
    document.body.style.backgroundColor="#3a093a";
    document.body.style.color = "whitesmoke";
    document.getElementById("newRound").style.backgroundColor = "#202020";
    document.getElementById("newRound").style.color = "whitesmoke";
    document.getElementById("newGame").style.backgroundColor = "#202020";
    document.getElementById("newGame").style.color = "whitesmoke";
    transition();
}
function blue(){
    document.body.style.backgroundColor = "#010150";
    document.body.style.color = "whitesmoke";
    document.getElementById("newRound").style.backgroundColor = "#202020";
    document.getElementById("newRound").style.color = "whitesmoke";
    document.getElementById("newGame").style.backgroundColor = "#202020";
    document.getElementById("newGame").style.color = "whitesmoke";
    transition();
}
function yellow(){
    document.body.style.backgroundColor="#FFDB58";
    document.body.style.color = "#121212";
    document.getElementById("newRound").style.backgroundColor = "#cacccb";
    document.getElementById("newRound").style.color = "#121212";
    document.getElementById("newGame").style.backgroundColor = "#cacccb";
    document.getElementById("newGame").style.color = "#121212";
    transition();
}
function white(){
    document.body.style.backgroundColor="white";
    document.body.style.color = "#121212";
    document.getElementById("newRound").style.backgroundColor = "#cacccb";
    document.getElementById("newRound").style.color = "#121212";
    document.getElementById("newGame").style.backgroundColor = "#cacccb";
    document.getElementById("newGame").style.color = "#121212";
    transition();
}
function black(){
    document.body.style.backgroundColor="#121212";
    document.body.style.color = "whitesmoke";
    document.getElementById("newRound").style.backgroundColor = "#202020";
    document.getElementById("newRound").style.color = "whitesmoke";
    document.getElementById("newGame").style.backgroundColor = "#202020";
    document.getElementById("newGame").style.color = "whitesmoke";
    transition();
}
