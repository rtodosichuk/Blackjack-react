import React, {PropTypes} from 'react';

const DealerCards = ({player, score, scoreAlt, cards}) => {
  const displayTotal = (total, totalAlt) => {
    return (total !== totalAlt && totalAlt <= 21) 
    ? total + "/" + totalAlt 
    : total.toString();
  };
  return (
    <div style={{height: 275}}>
      <div className="mid">
        <span className="numDisplay">
          {player}: {displayTotal(score, scoreAlt)}
        </span>
      </div>
      <div className="mid">
        {(cards.length > 0) &&
         <span>
          <img src={cards[0].images.png} height="200px" />
          <img src={require('../images/cardback.png')} height="200px" /> 
        </span>     
        }
      </div>
    </div>
  );
};

DealerCards.prototype = {
  player: PropTypes.string.isRequired,
  score: PropTypes.number
};

export default DealerCards;