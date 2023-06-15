let score=JSON.parse(localStorage.getItem('score'));
    if(score===null){
      score={
        wins:0,
        losses:0,
        tied:0
      }
    }
    displayresults();
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