import React, {PropTypes} from 'react';

const UserBet = ({bet}) => {
  return (
    <div className="mid">
      <span className="numDisplay">Bet: {bet}</span>
    </div>
  );
};

UserBet.prototype = {
  bet: PropTypes.number
};

export default UserBet;