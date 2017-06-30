export function makeBet(addBet) {
  return {type: "MAKE_BET", addBet};
}

export function clearBet() {
  return {type:"CLEAR_BET"};
}

export function dealDeck() {
  return {type: "DEAL_DECK"};
}

export function startNewGame() {
  return {type: "START_NEW_GAME"};
}

export function hitACard() {
  return {type: "HIT_A_CARD"};
}

export function playerStay() {
  return {type: "PLAYER_STAY"};
}