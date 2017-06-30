import deck from './deckApi';

class GameApi {
  
  static drawCards(cards, numOfCards) {
    return cards.slice(0, numOfCards);
  }

  static removeCards(cards, numOfCards) {
    return cards.slice(numOfCards, cards.length);
  }

  static calcCardTotal(cards, eleven) {
     let sum = Object.keys(cards).reduce(function(total, card) {
        let cardVal = Number(cards[card].cardValue);
        cardVal = (cardVal == 1 && eleven) ? 11 : cardVal;
        return Number(total) + cardVal;
    }, 0);
    return sum;
  }

  static addDeckCheck(cards) {
    if (cards.length < 10) {
        return cards.concat(deck.getShuffledDeck());
      }
      else {
        return cards;
      }
  }

  static newGame(state) {
    let bet = state.bet;
    let chips = state.totalChips;
    let status = state.gameMessage;
    
    if (status === "Push") {
      chips = chips + bet;
    }
    else if (status === "Player Wins!!!")  {
      chips = chips + (bet * 2);
    }

    return Object.assign({}, state, {
      deck: this.addDeckCheck(state.deck),
      dealerCards: [],
      dealerTotal: 0,
      dealerTotalAlt: 0,
      playerCards: [],
      playerTotal: 0,
      playerTotalAlt: 0,
      bet: 0,
      totalChips: chips,
      gameMessage: '',
      gameInProgress: false

    }); 
  }

  static deal(state) {
    if (state.deck.length === 0)
        return state;

      let cards = this.addDeckCheck(state.deck);
      let dc = this.drawCards(cards, 2);
      cards = this.removeCards(cards, 2);
      let pc = this.drawCards(cards, 2); 
      cards = this.removeCards(cards, 2);

      return Object.assign({}, state, {
        deck: cards, 
        dealerCards: dc,
        playerCards: pc,
        dealerFirstCard: Number(dc[0].cardValue),
        dealerFirstCardAlt: (Number(dc[0].cardValue) === 1 ? 11 : Number(dc[0].cardValue)),
        dealerTotal: this.calcCardTotal(dc, false),
        dealerTotalAlt: this.calcCardTotal(dc, true),
        playerTotal: this.calcCardTotal(pc, false),
        playerTotalAlt: this.calcCardTotal(pc, true),
        gameInProgress: true
      }); 
  }

  static hit(state) {
    let cards = this.addDeckCheck(state.deck);
    let pc = state.playerCards.concat(this.drawCards(cards, 1)); 
    cards = this.removeCards(cards, 1);

    let t1, t2, min, status = "";
    t1 = this.calcCardTotal(pc, false);
    t2 = this.calcCardTotal(pc, true);
    min = Math.min(t1, t2);
    if (min > 21) {
      status = "Player Bust!!!";
    }
   
    return  Object.assign({}, state, {
      deck: cards, 
      playerCards: pc,
      playerTotal: t1,
      playerTotalAlt: t2,
      gameMessage: status
    });
  }

  static checkDealerCards(dealerCards, playerTotal) {
    let t1, t2, status = "";
    
    t1 = this.calcCardTotal(dealerCards, false);
    t2 = this.calcCardTotal(dealerCards, true);    
    
    if (Math.min(t1, t2) > 21) {
      status = "Player Wins!!!";
    }
    else if ((t1 <= 21 && t1 == playerTotal) || (t2 <= 21 && t2 == playerTotal)) {
      status = "Push";
    }
    else if ((t1 <= 21 && t1 > playerTotal) || (t2 <= 21 && t2 > playerTotal)) {
      status = "Dealer wins!!!";
    }
     
    return status;
  }

  static stay(state) {
    let dc = state.dealerCards;
    let cards = this.addDeckCheck(state.deck);

    // Get playerTotal
    let playerTotal = Math.max(state.playerTotal, state.playerTotalAlt);
    if (playerTotal > 21) {
      playerTotal = Math.min(state.playerTotal, state.playerTotalAlt);
    }

    let status = this.checkDealerCards(dc, playerTotal);

    // Draw dealer cards until value equals or is higher then user.
    if (status === "") {
      do {
          dc = dc.concat(this.drawCards(cards, 1));  
          cards = this.removeCards(cards, 1);
          status = this.checkDealerCards(dc, playerTotal);
      }
      while (status === "");
    }
    
    return Object.assign({}, state, {
      deck: cards, 
      dealerCards: dc,
      dealerTotal: this.calcCardTotal(dc, false),
      dealerTotalAlt: this.calcCardTotal(dc, true), 
      gameMessage: status
    });
  }
}

export default GameApi;