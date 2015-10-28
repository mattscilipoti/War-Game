## Project 1 - War

#### Technologies used

HTML, CSS, JavaScript, and jQuery (whenever possible).

#### Approach taken

I started off with a simple UI that can be expanded on later with less basic graphics.

On the top of the screen is a scoreboard showing the size of each player's deck. Below that are two "castles", one for each player (the left one can be clicked by the user to start a battle). Between them is the "battlefield" where the drawn cards are shown and compared. And at the bottom is a notification feed that tells the player what happened in the previous turn--after being clicked to initialize the game at the very beginning.

Holding Enter bypasses the wait time after clicking to start a battle and automatically fights a battle every 20ms. This is useful for debugging and for resolving the game ultra-fast.

#### Installation instructions

Wait for the overlay to disappate, click the "Cut the deck" button, then click "Start battle" repeatedly or hold Enter down.

#### Unsolved problems

Oh man. So many.

1. The primary war comparison logic does not functionally append shown cards correctly, and the complexity of the scoping errors involved with layers upon layers of functions-in-functions meant I was unable to resolve them. The entire system has been scrapped and replaced with a function that discards the cards being compared for the current battle, as well as two more cards from each player's deck.

2. *Even with* this replaced war resolution function, the game usually settles into an infinite loop before ending. The randomization of card distribution does not let the decks reach 0 before they settle into a pattern with no wars left to resolve.

### User stories

1. As a user, I want to be able to see the cards flip so I feel like I'm playing a real card game.

2. As a user, I want to be able to reset the game so I don't have to refresh the page to play again.

3. As a fan of multiplayer games, I want to be able to play against a friend so I can feed my competitive streak.

4. As a loner, I want to be able to play against a computer, so I don't have to play as both players.

5. As a user, I want mutliple game modes so I don't get bored with only the basic game being available.
