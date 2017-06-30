import React, {PropTypes} from 'react';

const PlayerCards = ({player, score, scoreAlt, cards}) => {
  const displayTotal = (total, totalAlt) => {
    return (total !== totalAlt && totalAlt <= 21) 
    ? total + "/" + totalAlt 
    : total.toString();
  }
  return (
    <div style={{height: 275}}>
      <div className="mid">
        <span className="numDisplay">
          {player}: {displayTotal(score, scoreAlt)}
        </span>
      </div>
      <div className="mid">
        {cards.map(card => <img key={card.code} src={card.images.png} height="200px" />)}
      </div>
    </div>
  );
};

PlayerCards.prototype = {
  player: PropTypes.string.isRequired,
  score: PropTypes.number
};

export default PlayerCards;