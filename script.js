 $( document ).ready( function(){

///////////////////////// Score setup & increase functions

var warPlayerScore = 0;
var warComputerScore = 0;
var waitForYourTurn = 0;
var hasDoneFirstShuffle = 0;


$(".player-castle").click(function(){
  if (hasDoneFirstShuffle === 1 && waitForYourTurn === 0){
    warPlayerScore++;
    waitForYourTurn = 1;
    $(".player-castle").text("Resolving battle...").addClass("grey-castle");
    $(".computer-castle").addClass("grey-castle");
    window.setTimeout(function(){
      waitForYourTurn = 0;
      $(".player-castle").text("Start battle").removeClass("grey-castle");
      $(".computer-castle").removeClass("grey-castle");
    }, 1200);
    $(".player-score").text(warPlayerScore);
  }
});

////////////////////////// Card deck array & shuffle mechanism

// 14 is Ace, 13 is King, 12 is Queen, 11 is Jack.
var warDeck = [
  "14", "14", "14", "14", "13", "13", "13", "13", "12", "12", "12", "12", "11", "11", "11", "11", "10", "10", "10", "10", "9", "9", "9", "9", "8", "8", "8", "8", "7", "7", "7", "7", "6", "6", "6", "6", "5", "5", "5", "5", "4", "4", "4", "4", "3", "3", "3", "3", "2", "2", "2", "2"
];

$(".shuffle").click(function(){
  if (hasDoneFirstShuffle === 0){
    hasDoneFirstShuffle = 1;
    $(".player-castle").text("Start battle").removeClass("grey-castle");
    $(".computer-castle").removeClass("grey-castle");
  }
  console.log(warDeck);
  for (i = warDeck.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = warDeck[i];
    warDeck[i] = warDeck[j];
    warDeck[j] = temp;
  }
  console.log(warDeck);
  return warDeck;
});

/////////////////////// {stop} /////// DON'T WRITE CODE PAST HERE OR IT WON'T WORK /////// {stop} /////////////////////////
});
