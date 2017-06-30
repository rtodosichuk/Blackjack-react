import React, {PropTypes} from 'react';
import GameButton from './controls/GameButton';
import ChipButton from './controls/ChipButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../actions/gameActions';

class Controls extends React.Component {
  clear = (event) => {
      this.props.actions.clearBet();
  }

  onBetOne = (e) => {
    this.props.actions.makeBet(1);
  }

  onBetFive = (e) => {
    this.props.actions.makeBet(5);
  }

  onBetTen = (e) => {
    this.props.actions.makeBet(10);
  }
  
  onDeal = (e) => {
    this.props.actions.dealDeck();
  }

  onHit = (e) => {
    this.props.actions.hitACard();
  }

  onClearBet = (e) => {
    e.preventDefault();
    this.props.actions.clearBet();
  }

  onStay = (e) => {
    e.preventDefault();
    this.props.actions.playerStay();
  }

  render() {
    const {bet, gameInProgress} = this.props.state;
    return (
      <div>
        <div className="mid">
          <span>  
            <ChipButton disabled={gameInProgress} chipNum={1} onClicked={this.onBetOne} />
            <ChipButton disabled={gameInProgress} chipNum={5} onClicked={this.onBetFive} />
            <ChipButton disabled={gameInProgress} chipNum={10} onClicked={this.onBetTen} />
          </span>          
            {gameInProgress 
            ? <span style={{paddingLeft: 40}}>
                <GameButton label="Hit" onClicked={this.onHit} />
                <GameButton label="Stay" onClicked={this.onStay} />
              </span>  
            : <span style={{paddingLeft: 40}}>
                <GameButton label="Deal" onClicked={this.onDeal} disabled={bet === 0} />
                <GameButton label="Clear" onClicked={this.onClearBet} />
              </span>
            }
        </div>
      </div>
    );
  }
}

// Controls.prototype = {
//   betClicked:  PropTypes.func
//   //chips: PropTypes.number
// };

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


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
//export default Controls;