import React from 'react';
import eyeOpenIcon from '../../assets/icons/eye.svg';
const ViewPassButton = ({ titleButton, onclick }) => {
  return (
    <button
      type="button"
      className="border hover:bg-slate-600 w-auto p-1"
      onClick={onclick}
    >
      {/* {titleButton} */}
      <img className="h-5 w-5 " src={eyeOpenIcon} alt="" />
    </button>
  );
};

export default ViewPassButton;
