import React, {PropTypes} from 'react';

const GameMessage = ({msg, resetClicked}) => {
  return (
   <div className="backdrop">
      <p onClick={resetClicked}>{msg}</p>
    </div>
  );
};

GameMessage.prototype = {
  msg: PropTypes.string.isRequired,
  resetClicked: PropTypes.func.isRequired
};

export default GameMessage;