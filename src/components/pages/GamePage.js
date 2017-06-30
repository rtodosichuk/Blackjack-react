import React, {PropTypes} from 'react';
import PlayerCards from "../PlayerCards";
import DealerCards from "../DealerCards";
import UserBet from '../UserBet';
import Controls from '../Controls';
import UserChips from '../UserChips';
import GameMessage from '../GameMessage';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';

class GamePage extends React.Component { 
  onStart = (e) => {
    e.preventDefault();
    this.props.actions.startNewGame();
  };

  render() {
    const {bet, totalChips, dealerCards, dealerFirstCard, dealerFirstCardAlt, dealerTotal, dealerTotalAlt, playerTotal, playerTotalAlt, playerCards, gameMessage} = this.props.state;
    return (
      <div>
        {gameMessage === "" && 
          <DealerCards player="Dealer" score={dealerFirstCard} scoreAlt={dealerFirstCardAlt} cards={dealerCards} />}
        {gameMessage !== "" && 
          <PlayerCards player="Dealer" score={dealerTotal} scoreAlt={dealerTotalAlt} cards={dealerCards} />}
        <PlayerCards player="Player" score={playerTotal} scoreAlt={playerTotalAlt} cards={playerCards} />
        <UserBet bet={bet}  />
        <Controls />
        <UserChips chips={totalChips}/>
        {gameMessage 
          ? <GameMessage msg={gameMessage} resetClicked={this.onStart} /> 
          : false}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    state: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);