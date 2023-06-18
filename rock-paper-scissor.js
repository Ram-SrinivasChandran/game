let score=JSON.parse(localStorage.getItem('score'));
    if(score===null){
      score={
        wins:0,
        losses:0,
        tied:0
      }
    }
    displayresults();
    let isautoplayOn=false;
    let intervalId;
    document.querySelector('.js-autoplay-button').addEventListener('click',() =>{
      autoplay();
    })
    function autoplay(){
        if(isautoplayOn==false){
            intervalId=setInterval(function(){
            let playerMove=pickcomputerMove();
            pickplayerMove(playerMove);
          },1500)
          isautoplayOn=true;
          document.querySelector('.js-autoplay-button').innerHTML='Stop AutoPlay';
        }
        else{
          clearInterval(intervalId);
          isautoplayOn=false;
          document.querySelector('.js-autoplay-button').innerHTML='AutoPlay';
        }
    }
    document.querySelector('.js-rock-button').addEventListener('click',() =>{
      pickplayerMove('Rock');
    });
    document.querySelector('.js-paper-button').addEventListener('click',() =>{
      pickplayerMove('Paper');
    });
    document.querySelector('.js-scissors-button').addEventListener('click',() =>{
      pickplayerMove('Scissors');
    });
    document.body.addEventListener('keydown',(event) =>{
      if(event.key==='r' || event.key==='R'){
        pickplayerMove('Rock');
      }
      else if(event.key==='p' || event.key==='P'){
        pickplayerMove('Paper');
      }
      else if(event.key==='s' || event.key==='S'){
        pickplayerMove('Scissors');
      }
      else if(event.key==='a' || event.key==='A'){
        autoplay();
      }
      else if(event.key==='Backspace'){
        let displayMessage=document.querySelector('.confirm-reset');
        displayMessage.innerHTML=`Are you sure you want to reset the score? <button class="js-yes-button yes-button">Yes</button> <button class="js-no-button no-button">No</button>`;
        document.querySelector('.js-yes-button').addEventListener('click',()=>{
          resetTheResult();
          removeconfirmMessage(); 
    })
  }
});
    document.querySelector('.js-reset-button').addEventListener('click',() =>{
      let displayMessage=document.querySelector('.confirm-reset');
      displayMessage.innerHTML=`Are you sure you want to reset the score? <button class="yes-button">Yes</button> <button class="no-button">No</button>`;
      document.querySelector('.yes-button').addEventListener('click',()=>{
        resetTheResult();
        removeconfirmMessage(); 
  })
  document.querySelector('.no-button').addEventListener('click',()=>{
        removeconfirmMessage();
  })  
    });
    function removeconfirmMessage(){
      document.querySelector('.confirm-reset').innerHTML='';
    }
    function pickplayerMove(playerMove){
    const computerMove=pickcomputerMove();
    let result='';
    if(playerMove==='Scissors'){
      if(computerMove=== 'Rock'){
        result='You Loose.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="scissors-emoji.png"> <img class="move-image" src="rock-emoji.png"> Computer`;
      }
      else if(computerMove==='Paper'){
        result='You Win.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="scissors-emoji.png"> <img class="move-image" src="paper-emoji.png"> Computer`;
      }
      else if(computerMove==='Scissors'){
        result='Tie.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="scissors-emoji.png"> <img class="move-image" src="scissors-emoji.png"> Computer`;
      }
      comparingResults(result);
    }
    else if(playerMove==='Paper'){
      if(computerMove=== 'Rock'){
        result='You Win.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="paper-emoji.png"> <img class="move-image" src="rock-emoji.png"> Computer`;
      }
      else if(computerMove==='Paper'){
        result='Tie.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="paper-emoji.png"> <img class="move-image" src="paper-emoji.png"> Computer`;
      }
      else if(computerMove==='Scissors'){
        result='You Loose.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="paper-emoji.png"> <img class="move-image" src="scissors-emoji.png"> Computer`;
     }
     comparingResults(result);
    }    
    else if(playerMove==='Rock'){
      if(computerMove=== 'Rock'){
        result='Tie.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="rock-emoji.png"> <img class="move-image" src="rock-emoji.png"> Computer`;
      }
      else if(computerMove==='Paper'){
        result='You Loose.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="rock-emoji.png"> <img class="move-image" src="paper-emoji.png"> Computer`;
      }
      else if(computerMove==='Scissors'){
        result='You Win.';
        document.querySelector('.js-result')
        .innerHTML=`${result}`;
        document.querySelector('.js-moves')
        .innerHTML=`You <img class="move-image" src="rock-emoji.png"> <img class="move-image" src="scissors-emoji.png"> Computer`;
      }
      comparingResults(result);
    }
    displayresults();
    }
    function resetTheResult(){
        score.wins=0;
        score.losses=0;
        score.tied=0;
        localStorage.removeItem('score');
        displayresults();
    }
    function displayresults(){
        document.querySelector('.js-score')
          .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.tied}`;
    }
    function pickcomputerMove(){
      let randomnum=Math.random();
      let computerMove='';
      if(randomnum>=0 && randomnum<1/3){
        computerMove='Rock';
      }
      else if(randomnum>=1/3 && randomnum<2/3){
        computerMove='Paper';
      }
      else if(randomnum>=2/3 && randomnum<1){
        computerMove='Scissors';
      }
      return computerMove;
    }
    function comparingResults(result){
      if(result==='You Win.'){
        score.wins+=1;
      }
      else if(result==='You Loose.'){
        score.losses+=1;
      }
      else if(result==='Tie.'){
        score.tied+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
    }