import React, {PropTypes} from 'react';

const UserChips = ({chips}) => {
  return (
    <div className="mid">
      <div className="mid pushDown">
        <span className="numDisplay">Chips: {chips}</span>
      </div>
    </div>
  );
};

UserChips.prototype = {
  chips: PropTypes.number
};

export default UserChips;