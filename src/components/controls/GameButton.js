import React, {PropTypes} from 'react';

const GameButton = ({label, onClicked, disabled}) => {
  const getStyle = () => {
    return  "btn" + (disabled ? "Disabled" : "");
  };
  
  return (
    <button className={getStyle()} onClick={onClicked} disabled={disabled}>{label}</button>
  );
};

GameButton.prototype = {
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  disabled: PropTypes.bool
};

export default GameButton; 