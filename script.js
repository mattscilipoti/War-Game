 $( document ).ready(function(){

///////////////////////// Variables

var warPlayerScore = 0;
var warComputerScore = 0;
var warPlayerBattleResult = 0;
var warComputerBattleResult = 0;
var waitForYourTurn = 0;
var hasDoneFirstShuffle = 0;
var splitDeck = [ " " ];
var gameOver = 0;

///////////////////////// Click the castle

$(".player-castle").click(function(){
  if (hasDoneFirstShuffle === 1 && waitForYourTurn === 0){
    warBattle();
    waitForYourTurn = 1;
    $(".player-castle").text("Resolving battle...").addClass("grey-castle");
    $(".computer-castle").addClass("grey-castle");
    window.setTimeout(function(){
      if (gameOver === 0){
        waitForYourTurn = 0;
        $(".player-castle").text("Start battle").removeClass("grey-castle");
        $(".computer-castle").removeClass("grey-castle");
      }
      else {
        decideWinner();
      }
    }, 1500);
  }
});

///////////////////////// Battle & compare

function warBattle(){
  setTimeout(function(){
    warPlayerBattleResult = warDeck.pop();
    console.log(warPlayerBattleResult);
    $(".player-battle").text(warPlayerBattleResult);
    warComputerBattleResult = splitDeck.pop();
    console.log(warComputerBattleResult);
    $(".computer-battle").text(warComputerBattleResult);
    console.log(warPlayerScore);
    if (warPlayerBattleResult > warComputerBattleResult){
      warPlayerScore++;
      console.log(warPlayerScore);
      setTimeout(function(){
        $(".player-score").text(warPlayerScore);
        console.log(warPlayerScore);
      }, 500);
    }
    else if (warComputerBattleResult > warPlayerBattleResult){
      warComputerScore++;
      setTimeout(function(){
        $(".computer-score").text(warComputerScore);
      }, 500);
    }
    else {
      //draw
    }
  }, 500);
  if (warDeck.length === 0){
    alert("Game over!");
    gameOver = 1;
  }
}

///////////////////////// Card deck array & shuffle button

// 14 is Ace, 13 is King, 12 is Queen, 11 is Jack.
var warDeck = [
  14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2
];

function cutTheDeck(){
  console.log(warDeck);
  splitDeck = warDeck.splice(26, 52);
  console.log(splitDeck);
  console.log(warDeck);
}

$(".shuffle").click(function(){
  if (hasDoneFirstShuffle === 1){
    return;
  }
  hasDoneFirstShuffle = 1;
  $(".player-castle").text("Start battle").removeClass("grey-castle");
  $(".computer-castle").removeClass("grey-castle");
  $(".shuffle").text("Deck shuffled").addClass("grey-castle");
  for (i = warDeck.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = warDeck[i];
    warDeck[i] = warDeck[j];
    warDeck[j] = temp;
  }
  cutTheDeck();
});

///////////////////////// Decide the winner

function decideWinner(){
  
}

/////////////////////// {stop} /////// DON'T WRITE CODE PAST HERE OR IT WON'T WORK /////// {stop} /////////////////////////
});
