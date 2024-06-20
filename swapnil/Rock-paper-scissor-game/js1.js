let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice  = ()=>{
const options = ["rock","paper","scissors"];
const randIDX = Math.floor(Math.random()*3);
return options[randIDX];
}


const drawgame = ()=>{
    console.log("game was draw");
    msg.innerText = "game was draw.play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText= userscore;
        console.log("you win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compScorePara.innerText= compscore;
        console.log("you lose");
        msg.innerText=`You lost!  ${compchoice} beats Your  ${userchoice}`;;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice = genCompchoice();
    console.log("comp choice =",compchoice);

    if(userchoice === compchoice){
       drawgame();
    }

    else{
        let userwin= true;
        if(userchoice === "rock"){
           userwin= compchoice ==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="scissors"?false:true;
        }
        else{
            userwin = compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});