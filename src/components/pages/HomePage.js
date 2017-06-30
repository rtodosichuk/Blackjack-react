import React from 'react';
import {browserHistory} from 'react-router';

class HomePage extends React.Component {
    redirectToGame() {
      browserHistory.push('/game');
    }

    render() {
        return (
            <div className="mid">
                <h1>Blackjack</h1>
                <img src={require('../../images/poker-512.png')} alt="Blackjack" width="200px"/>
                <p>Click the Start button, make your  bet, and click Deal to start a new game.</p>
                <button className="btn" onClick={this.redirectToGame}>Start</button>
            </div>
        );
    }
}

export default HomePage;