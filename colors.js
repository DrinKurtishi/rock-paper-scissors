//for background choosing

function transition(){
    document.body.style.transition="1s";
}
function DarkTheme(){
    document.body.style.color = "whitesmoke";
    document.getElementById("newRound").style.backgroundColor = "#202020";
    document.getElementById("newRound").style.color = "whitesmoke";
    document.getElementById("newGame").style.backgroundColor = "#202020";
    document.getElementById("newGame").style.color = "whitesmoke";
    document.getElementById("newRound").style.boxShadow = "whitesmoke 2px 8px 8px -5px";
    document.getElementById("newGame").style.boxShadow = "whitesmoke 2px 8px 8px -5px";

}
function LightTheme(){
    document.body.style.color = "#121212";
    document.getElementById("newRound").style.backgroundColor = "#cacccb";
    document.getElementById("newRound").style.color = "#121212";
    document.getElementById("newGame").style.backgroundColor = "#cacccb";
    document.getElementById("newGame").style.color = "#121212";
    document.getElementById("newRound").style.boxShadow = "#121212 2px 8px 8px -5px";
    document.getElementById("newGame").style.boxShadow = "#121212 2px 8px 8px -5px";
}
function purple(){
    document.body.style.backgroundColor="#3a093a";//background color
    DarkTheme();
    transition();
}
function blue(){
    document.body.style.backgroundColor = "rgb(30, 50, 90)";
    DarkTheme();
    transition();
}
function yellow(){
    document.body.style.backgroundColor="#FFDB58";
    LightTheme();
    transition();
}
function white(){
    document.body.style.backgroundColor="rgb(220, 220, 180)";
    LightTheme();
    transition();
}
function black(){
    document.body.style.backgroundColor="#121212";
    DarkTheme();
    transition();
}