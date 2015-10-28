 $( document ).ready(function(){

window.setTimeout(function(){
    $(".overlay").fadeOut("6000", function(){});
}, 1200);

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

var waitTime = 1500;
var warWestBattleResult = 0;
var warComputerBattleResult = 0;
var waitForYourTurn = 0;
var hasDoneFirstShuffle = 0;
var gameOver = 0;
var battleArray = [ " " ];

///////////////////////// Update both scores to reflect current deck sizes

function updateScores(){
$(".west-score").text(west.deck.length);
$(".east-score").text(east.deck.length);
}

///////////////////////// Shuffle the deck at the beginning of game

$(".shuffle").click(function(){
  if (hasDoneFirstShuffle === 1){
    return;
  }
  hasDoneFirstShuffle = 1;
  $(".west-castle").html("Start battle").removeClass("grey-castle").addClass("hoverglow");
  $(".east-castle").removeClass("grey-castle");
  $(".shuffle").text("Game initiated").removeClass("hoverglow");
  for (var i = west.deck.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = west.deck[i];
    west.deck[i] = west.deck[j];
    west.deck[j] = temp;
  }
  cutTheDeck();
});

////////////////////////// Split the deck in half & give half to east player at beginning of game

function cutTheDeck(){
  east.deck = west.deck.splice(26, 52);
  updateScores();
}

///////////////////////// Click the castle to start a battle

$(".west-castle").click(function() {
  if (hasDoneFirstShuffle === 1 && waitForYourTurn === 0){
    decideBattle();
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
    }, waitTime);
  }
});

///////////////////////// Resolve a battle

function decideBattle(){
  $(".shuffle").removeClass("shuffle-war").text("Resolving battle...");
  $(".war-section").css("display", "none");
  setTimeout(function(){
    drawCardsForBattle(east, battleArray);
    drawCardsForBattle(west, battleArray);
    updateScores();
    if (battleArray[0] > battleArray[1]){
      winTheBattle(west);
    }
    else if (battleArray[1] > battleArray[0]){
      winTheBattle(east);
    }
    else {
        aDrawMeansWar();
      }
  }, 500);
  if (west.deck.length === 0){
    gameOver = 1;
  }
}

///////////////////////// Draw cards into temporary battle array

function drawCardsForBattle(kingdom, array) {
  console.log(kingdom);
  array.unshift(kingdom.deck.shift());
  $("." + kingdom.name.toLowerCase() + "-battle").text(array[0]);
}

///////////////////////// Give cards to battle-winning player

function winTheBattle(kingdom){
  kingdom.deck.push(battleArray.shift());
  kingdom.deck.push(battleArray.shift());
  setTimeout(function(){
    updateScores();
    $(".shuffle").text( kingdom.name + " Kingdom gains ground");
    battleArray = [ " " ];
  }, 500);
}

////////////////////// Fake war because I fail at real war

function aDrawMeansWar() {
  setTimeout(function(){
    west.deck.unshift();
    west.deck.unshift();
    east.deck.unshift();
    east.deck.unshift();
    battleArray = [ " " ];
    updateScores();
    $(".shuffle").text("Each side loses ground.");
  }, 500);
}

/*                                                    <--- Fail war

////////////////////// War in the event of a draw

function aDrawMeansWar(){
  var west = this.west;
  var east = this.east;
  $(".shuffle").addClass("shuffle-war").text("War!");
  $(".war-section").css("display", "block");
  setUpWarStage(west , east);
}

///////////////////////// Set up area for war cards

function setUpWarStage(kingdom1, kingdom2) {
  var westDraw = kingdom1;
  var eastDraw = kingdom2;
  var westWarArray = [ " " ];
  var eastWarArray = [ " " ];
  $(".war-section").append("<div class=\"war-stage\"></div>");
  drawCardsForWar(westDraw, westWarArray);
  drawCardsForWar(eastDraw, eastWarArray);
}

///////////////////////// Draw cards into temporary war arrays

function drawCardsForWar(kingdom, array) {
  if (kingdom.deck.length > 0) {
    array.push(kingdom.deck.shift());
    array.push(kingdom.deck.shift());
    array.unshift(kingdom.deck.shift());
    $(".war-stage").append("." + kingdom.name.toLowerCase() + "-war");
    $("." + kingdom.name.toLowerCase() + "-war").text(array[0]);
  }
  else {
    decideWinner();
  }
}

*/

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

//////////////////////// SuperClick mode

function superClick() {
  $(".west-castle").trigger("click");
}

$(document).keydown(function(e){
  if (e.which == 13) {
      waitTime = 20;
      setInterval(superClick(), 20);
   }
});

$(document).keyup(function(e){
  if (e.which == 13) {
      waitTime = 1500;
      clearInterval();
   }
});

});
