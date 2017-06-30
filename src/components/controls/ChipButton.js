import React, {PropTypes} from 'react';

const ChipButton = ({chipNum, onClicked, disabled}) => {
  const getStyle = () => {
    let cssClass = chipNum > 1 ? "bet" + chipNum + " bet": "bet";
    if (disabled)
      cssClass = cssClass + "Disabled";
    return cssClass;
  };
  return (
    <button className={getStyle()} onClick={onClicked} disabled={disabled}>{chipNum}</button>  
  );
};

ChipButton.prototype = {
  chipNum: PropTypes.number.isRequired,
  onClicked: PropTypes.func,
  disabled: PropTypes.bool
};

export default ChipButton;