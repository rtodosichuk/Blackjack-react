import initialState from '../store/initialState';
import game from '../api/gameApi';

export default function gameReducer(state = game.newGame(initialState), action) {
  switch (action.type) {
    case 'DEAL_DECK': {
      return game.deal(state); 
    }
    case 'START_NEW_GAME': {
      return game.newGame(state); 
    }
    case 'HIT_A_CARD': {
     return game.hit(state);
    }
    case 'PLAYER_STAY': {
      return game.stay(state);
    }
    case 'MAKE_BET':
      return Object.assign({}, state, {
        bet: state.bet + action.addBet,
        totalChips: state.totalChips - action.addBet
      });
    case 'CLEAR_BET': {
      const currentBet = state.bet;
      return Object.assign({}, state, {
        bet: 0,
        totalChips: state.totalChips + currentBet
      });
    }
    default:
      return state;
  }
}