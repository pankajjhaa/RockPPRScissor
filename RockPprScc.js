//Challange 3 Stone-ppr-scissor

function rpsGame(yourChoice){
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToInt());

    
    console.log('Computer choice',botChoice);
    
    result = decideWinner(humanChoice,botChoice);
    console.log(result);
   
    message = finalMessage(result);
    alert(message);

}

function randToInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rspDatabase = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'scissor':{'scissor':0.5,'rock':0,'paper':1},
        'paper':{'scissor':0,'rock':1,'paper':0.5},

    };
    yourScore = rspDatabase[yourChoice][computerChoice];
    computerScore = rspDatabase[computerChoice][yourChoice];
    // alert(yourScore);
    alert(computerScore);
    return (yourScore,computerScore);
}

function finalMessage(yourScore){
    if(yourScore===0){
        return {'message':'You Lost!', 'color':'red'};
    }else if(yourScore===0.5){
        return {'message':'You Tied' , 'color': 'yellow'};
    }else if(yourScore===1){
        return {'message':'You Won!!' , 'color':'green'};
    }
    
}

// function rpsFrontend(humanImageChoice,botImageChoice,finalMessage){
//     var imageData = {
//         'rock': document.getElementById('rock').src ,
//         'paper': document.getElementById('paper').src ,
//         'scissor': document.getElementById('scissor').src ,
//     }

//     //lets remove all image 
//    document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissor').remove();

//     var humanDiv = document.createElement('div');
//     var messageDiv = document.createElement('div');
//     var botDiv = document.createElement('div');
//     humanDiv.innerHTML = "<img src'" + imageData[humanImageChoice]+"'>"
//     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
// }


