 $( document ).ready( function(){

///////////////////////// Score setup & increase functions

var warPlayerScore = 0;
var warComputerScore = 0;
var waitForYourTurn = 0;


$(".player-castle").click(function(){
  if (waitForYourTurn === 0){
    warPlayerScore++;
    waitForYourTurn = 1;
    $(".player-castle").text("Waiting...");
    window.setTimeout(function(){
      waitForYourTurn = 0;
      $(".player-castle").text(" ");
    }, 3000);
    $(".player-score").text(warPlayerScore);
  }
});

});

////////////////////////// Card deck array & shuffle mechanism

var warDeck = [
  "Ace", "Ace", "Ace", "Ace", "King", "King", "King", "King", "Queen", "Queen", "Queen", "Queen", "Jack", "Jack", "Jack", "Jack", "10", "10", "10", "10", "9", "9", "9", "9", "8", "8", "8", "8", "7", "7", "7", "7", "6", "6", "6", "6", "5", "5", "5", "5", "4", "4", "4", "4", "3", "3", "3", "3", "2", "2", "2", "2"
];

function shuffleDeck(deck){
  for (i =deck.length; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

$(".shuffle").click(function(){
  shuffleDeck(warDeck);
  warDeck = deck;
});
