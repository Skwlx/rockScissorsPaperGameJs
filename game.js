let playerScoreSpan = document.getElementById('player-score');
let comScoreSpan = document.getElementById('com-score');
let message = document.getElementById('msg-p');
let circles = document.querySelectorAll('.circle');
let comScore = 0;
let playerScore = 0;
let defaultMsgVal = message.textContent = "Let's play a rock paper scissors game!";
const options = ['rock', 'scissors', 'paper']; 

function check(){
    let comPick = options[Math.floor(Math.random()*options.length)]; //picking a random option form the array
    function win(){
        playerScore++;
        playerScoreSpan.innerHTML = playerScore;
        comScoreSpan.innerHTML = comScore;
        message.textContent= 'You got a point!' + ' Computer have picked: '+ comPick;
        console.log('You got a point!');
    }
    function lose(){
        comScore++;
        playerScoreSpan.innerHTML = playerScore;
        comScoreSpan.innerHTML = comScore;
        message.textContent= 'Computer got a point!' + ' Computer have picked: '+ comPick;
        console.log('Computer got a point!');
    }
    function draw(){
        message.textContent= 'Draw!' + ' Computer have picked: '+ comPick;
        console.log('DRAW!');
    }
    if(this.id == 'rock'){
        if(comPick == 'paper'){
            lose();
        }
        if(comPick == 'scissors'){
            win();
        }
        if(comPick == 'rock'){
            draw();
        }
    }
    if(this.id == 'paper'){
        if(comPick == 'paper'){
            draw();
        }
        if(comPick == 'scissors'){
            lose();
        }
        if(comPick == 'rock'){
            win();
        }
    }
    if(this.id == 'scissors'){
        if(comPick == 'paper'){
            win();
        }
        if(comPick == 'scissors'){
            draw();
        }
        if(comPick == 'rock'){
            lose();
        }
    }
}
function event(obj){
    for(let i =0; i<obj.length; i++){
        obj[i].addEventListener('click', check);
    }
}
event(circles);