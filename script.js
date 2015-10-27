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
var drawCardPlayer1 = 0;
var drawCardPlayer2 = 0;
var drawCardComputer1 = 0;
var drawCardComputer2 = 0;

///////////////////////// Update both scores

function updateScores(){
warPlayerScore = warDeck.length;
warComputerScore = splitDeck.length;
$(".player-score").text(warPlayerScore);
$(".computer-score").text(warComputerScore);
}

///////////////////////// Click the castle

$(".player-castle").click(function(){
  if (hasDoneFirstShuffle === 1 && waitForYourTurn === 0){
    warBattle();
    waitForYourTurn = 1;
    $(".player-castle").text("Forces engaged").addClass("grey-castle");
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
  $(".shuffle").text("A battle begins!");
  setTimeout(function(){
    warPlayerBattleResult = warDeck.shift();
    $(".player-battle").text(warPlayerBattleResult);
    warComputerBattleResult = splitDeck.shift();
    $(".computer-battle").text(warComputerBattleResult);
    updateScores();
    if (warPlayerBattleResult > warComputerBattleResult){
      warDeck.push(warPlayerBattleResult);
      warDeck.push(warComputerBattleResult);
      setTimeout(function(){
        updateScores();
        $(".shuffle").text("West Kingdom gains ground");
      }, 500);
    }
    else if (warComputerBattleResult > warPlayerBattleResult){
      splitDeck.push(warComputerBattleResult);
      splitDeck.push(warPlayerBattleResult);
      setTimeout(function(){
        updateScores();
        $(".shuffle").text("East Kingdom gains ground");
      }, 500);
    }
    else {
      $(".shuffle").html("<p style=\"margin-top: -15px; font-size: 225%; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #fff, 0 0 40px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000, 0 0 100px #ff0000, 0 0 150px #ff0000;\">War!</p>");

    }
  }, 500);
  if (warDeck.length === 0){
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
  updateScores();
}

$(".shuffle").click(function(){
  if (hasDoneFirstShuffle === 1){
    return;
  }
  hasDoneFirstShuffle = 1;
  $(".player-castle").html("Start battle").removeClass("grey-castle");
  $(".computer-castle").removeClass("grey-castle");
  $(".shuffle").text("Game initiated");
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
  if (warPlayerScore > warComputerScore){
    $(".shuffle").text("West Kingdom victorious");
    $(".player-castle").text("Victory!").removeClass("grey-castle");
    $(".computer-castle").html("<img src=\"fire.gif\" alt=\"Fire is destroying the west castle.\" />").removeClass("grey-castle");
  }
  if (warComputerScore > warPlayerScore){
    $(".shuffle").text("East Kingdom victorious");
    $(".computer-castle").text("Victory!").removeClass("grey-castle");
    $(".player-castle").html("<img src=\"fire.gif\" alt=\"Fire is destroying the east castle.\" />").removeClass("grey-castle");
  }
  else {
    $(".shuffle").text("An armistice is signed");
    $(".player-castle").text("Draw").removeClass("grey-castle");
    $(".computer-castle").text("Draw").removeClass("grey-castle");
  }
}

/////////////////////// {stop} /////// DON'T WRITE CODE PAST HERE DUMMY OR IT WON'T WORK /////// {stop} /////////////////////////
});
