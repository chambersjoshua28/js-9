// Define the Card class
class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  
    // Method to display card information
    display() {
      console.log(`${this.value} of ${this.suit}`);
    }
  }
  
  // Define the Deck class
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      // Generate a standard deck of 52 cards
      for (let suit of suits) {
        for (let value of values) {
          this.cards.push(new Card(suit, value));
        }
      }
    }
  
    // Method to shuffle the deck
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    // Method to deal cards to players
    deal() {
      return this.cards.splice(0, 26);
    }
  }
  
  // Define the Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    }
  
    // Method to play a card
    playCard() {
      return this.hand.pop();
    }
  }
  
  // Initialize the game
  function playWarGame() {
    // Create two players
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');
  
    // Create a deck and shuffle it
    const deck = new Deck();
    deck.shuffle();
  
    // Deal cards to players
    player1.hand = deck.deal();
    player2.hand = deck.deal();
  
    // Iterate through turns
    for (let i = 0; i < 26; i++) {
      const card1 = player1.playCard();
      const card2 = player2.playCard();
  
      console.log(`${player1.name} plays:`);
      card1.display();
      console.log(`${player2.name} plays:`);
      card2.display();
  
      // Compare card values and update scores
      if (card1.value > card2.value) {
        player1.score++;
        console.log(`${player1.name} wins the round!`);
      } else if (card1.value < card2.value) {
        player2.score++;
        console.log(`${player2.name} wins the round!`);
      } else {
        console.log(`Round is a tie!`);
      }
    }
  
    // Display final scores and declare the winner
    console.log(`${player1.name} score: ${player1.score}`);
    console.log(`${player2.name} score: ${player2.score}`);
    if (player1.score > player2.score) {
      console.log(`${player1.name} wins the game!`);
    } else if (player1.score < player2.score) {
      console.log(`${player2.name} wins the game!`);
    } else {
      console.log(`The game ends in a tie!`);
    }
  }
  
  // Start the game
  playWarGame();
  