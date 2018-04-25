//initialize variables
const deck = document.querySelector('.deck');
//cards array
let card = document.querySelectorAll('.card');
let cards = [...card];
//for loop to display cards
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener('click', function () {
     this.classList.toggle('open');
     this.classList.toggle('show');
   });
};
//add the cards that have now been shuffled to the variable shuffledCards
let shuffledCards = shuffle(cards);
//maps the shuffledCards array to the deck class
shuffledCards.map(item => {
    deck.appendChild(item);
})
//function to shuffle cards once page loads
function startGame() {
window.onload = shuffleCards();
}
startGame();
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
