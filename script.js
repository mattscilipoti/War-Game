 $( document ).ready(function(){

window.setTimeout(function(){
    $(".overlay").fadeOut("6000", function(){});
}, 1500);

  //gameInitialize();
  // $(".shuffle").click(shuffleDeck);

///////////////////////// Variables

var west = {
  name: "West",
  deck: [ 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2 ],
};

var east = {
  name: "East",
  deck: [ " " ],
};

var warWestBattleResult = 0;
var warComputerBattleResult = 0;
var waitForYourTurn = 0;
var hasDoneFirstShuffle = 0;
var gameOver = 0;
var battleArray = [ " " ];
var battleArrayWarWest = [ " " ];

///////////////////////// Update both scores

function updateScores(){
$(".west-score").text(west.deck.length);
$(".east-score").text(east.deck.length);
}

///////////////////////// Click the castle

$(".west-castle").click(function(){
  if (hasDoneFirstShuffle === 1 && waitForYourTurn === 0){
    warBattle();
    waitForYourTurn = 1;
    $(".west-castle").text("Forces engaged").addClass("grey-castle").removeClass("hoverglow");
    $(".east-castle").addClass("grey-castle");
    window.setTimeout(function(){
      if (gameOver === 0){
        waitForYourTurn = 0;
        $(".west-castle").text("Start battle").removeClass("grey-castle").addClass("hoverglow");
        $(".east-castle").removeClass("grey-castle");
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
    battleArray.unshift(east.deck.shift());
    $(".east-battle").text(battleArray[0]);
    battleArray.unshift(west.deck.shift());
    $(".west-battle").text(battleArray[0]);
    updateScores();
    if (battleArray[0] > battleArray[1]){
      west.deck.push(battleArray.shift());
      west.deck.push(battleArray.shift());
      setTimeout(function(){
        updateScores();
        $(".shuffle").text("West Kingdom gains ground");
        battleArray = [ " " ];
      }, 500);
    }
    else if (battleArray[1] > battleArray[0]){
      east.deck.push(battleArray.shift());
      east.deck.push(battleArray.shift());
      setTimeout(function(){
        updateScores();
        $(".shuffle").text("East Kingdom gains ground");
        battleArray = [ " " ];
      }, 500);
    }
    else {
        inAD2101WarWasBeginning();
      }
  }, 500);
  if (west.deck.length === 0){
    gameOver = 1;
  }
}

////////////////////// All your card are belong to us

function inAD2101WarWasBeginning(){
  console.log("Somebody set up us the bomb!!");
  $(".shuffle").html("<p style=\"margin-top: -15px; font-size: 225%; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #fff, 0 0 40px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000, 0 0 100px #ff0000, 0 0 150px #ff0000;\">War!</p>");
  // drawWarCards(east.deck, battleArray);
  battleArray.push(east.deck.shift());
  battleArray.push(east.deck.shift());
  battleArray.unshift(east.deck.shift());
  $(".east-battle").html(warComputerBattleResult + "<br />" + drawCardComputer2 + "<br />" + drawCardComputer3);
  // drawWarCards(west.deck, battleArrayWarWest);
  battleArrayWarWest.push(east.deck.shift());
  battleArrayWarWest.push(east.deck.shift());
  battleArrayWarWest.unshift(east.deck.shift());
  $(".west-battle").html(warWestBattleResult + "<br />" + drawCardWest2 + "&nbsp; &nbsp; &nbsp;" + drawCardWest3);
  battleArray = [ " " ];
  console.log("For great justice.");
}

///////////////////////// Card deck array & shuffle button

function cutTheDeck(){
  console.log(west.deck);
  east.deck = west.deck.splice(26, 52);
  console.log(east.deck);
  console.log(west.deck);
  updateScores();
}

$(".shuffle").click(function(){
  if (hasDoneFirstShuffle === 1){
    return;
  }
  hasDoneFirstShuffle = 1;
  $(".west-castle").html("Start battle").removeClass("grey-castle").addClass("hoverglow");
  $(".east-castle").removeClass("grey-castle");
  $(".shuffle").text("Game initiated").removeClass("hoverglow");
  for (i = west.deck.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = west.deck[i];
    west.deck[i] = west.deck[j];
    west.deck[j] = temp;
  }
  cutTheDeck();
});

///////////////////////// Decide the winner

function decideWinner(){
  if (warWestScore > warComputerScore){
    $(".shuffle").text("West Kingdom is victorious");
    $(".west-castle").text("Victory!").removeClass("grey-castle");
    $(".east-castle").html("<img src=\"fire.gif\" alt=\"Fire is destroying the west castle.\" />").removeClass("grey-castle");
  }
  if (warComputerScore > warWestScore){
    $(".shuffle").text("East Kingdom is victorious!");
    $(".east-castle").text("Victory!").removeClass("grey-castle");
    $(".west-castle").html("<img src=\"fire.gif\" alt=\"Fire is destroying the east castle.\" />").removeClass("grey-castle");
  }
  else {
    $(".shuffle").text("An armistice is signed.");
    $(".west-castle").text("Draw").removeClass("grey-castle");
    $(".east-castle").text("Draw").removeClass("grey-castle");
  }
}

/////////////////////// {stop} /////// DON'T WRITE CODE PAST HERE DUMMY OR IT WON'T WORK /////// {stop} /////////////////////////
});
